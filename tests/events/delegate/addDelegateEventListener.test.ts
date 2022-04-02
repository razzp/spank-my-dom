import { DOMWindow, JSDOM } from 'jsdom';

import { delegateCache } from '../../../src/events/delegate/internal/delegateCache';
import { addDelegateEventListener } from '../../../src/events/delegate/addDelegateEventListener';

import type { DelegateEvent } from '../../../src/events/delegate/aliases/DelegateEvent';

let jsdomWindow: DOMWindow;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1">
        <div class="target target-2">
        </div>
        </div>
        `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;

    // This ensures that the `instanceof` operator works inside JSDOM.
    global.Element = jsdomWindow.Element;
});

describe('Adding delegate event listeners', () => {
    test('Adding listener to a new target adds a new entry to the cache', () => {
        // Create delegate event listener.
        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            () => void 0
        );

        // Check that an entry has been added to the cache.
        expect(delegateCache.has(jsdomDocument)).toBe(true);
    });

    test('Adding listener to an existing target updates the existing cache entry', () => {
        // Ensure there is already a cache entry for this target.
        delegateCache.set(jsdomDocument, new Set([undefined as never]));

        // Create delegate event listener.
        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            () => void 0
        );

        // Grab the cache entry.
        const cacheEntry = delegateCache.get(jsdomDocument);

        // Check that the cache entry is defined and that it contains 2 entries.
        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(2);
    });
});

describe('Triggering delegate event listeners', () => {
    test('Single matching descendant of target is found and listener is called with correct target', () => {
        // Create a mock listener.
        const listener = jest.fn((target) => target);

        // Grab the target element.
        const target = jsdomDocument.querySelector('.target-1');

        // Create delegate event listener.
        addDelegateEventListener(jsdomDocument, '.target-1', 'click', (event) =>
            listener(event.target)
        );

        // Dispatch an event.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was called once.
        expect(listener.mock.calls.length).toBe(1);

        // Check that the target is correct.
        expect(listener.mock.results[0].value).toBe(target);
    });

    test('Multiple matching descendants of target are found and listeners are called with correct targets', () => {
        // Create a mock listener.
        const listener = jest.fn((target) => target);

        // Grab the target elements.
        const target1 = jsdomDocument.querySelector('.target-1');
        const target2 = jsdomDocument.querySelector('.target-2');

        // Create delegate event listener.
        addDelegateEventListener(jsdomDocument, '.target', 'click', (event) =>
            listener(event.target)
        );

        // Dispatch an event on the deepest target.
        target2?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was called twice.
        expect(listener.mock.calls.length).toBe(2);

        // Check that the targets are correct.
        expect(listener.mock.results[0].value).toBe(target2);
        expect(listener.mock.results[1].value).toBe(target1);
    });

    test('Listener object with `handleEvent` prop is called with correct target', () => {
        // Create a mock listener.
        const listener = jest.fn((target) => target);

        // Grab the target element.
        const target = jsdomDocument.querySelector('.target-1');

        // Create delegate event listener.
        addDelegateEventListener(jsdomDocument, '.target-1', 'click', {
            handleEvent: (event) => listener(event.target),
        });

        // Dispatch an event.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was called once.
        expect(listener.mock.calls.length).toBe(1);

        // Check that the target is correct.
        expect(listener.mock.results[0].value).toBe(target);
    });

    test('Calling `stopDelegation()` on an event prevents any further listener calls', () => {
        // Create a mock listener.
        const listener = jest.fn((event: DelegateEvent<Event>) => {
            event.stopDelegation();
            return event.target;
        });

        // Grab the deepest target element.
        const target = jsdomDocument.querySelector('.target-2');

        // Create delegate event listener.
        addDelegateEventListener(jsdomDocument, '.target', 'click', listener);

        // Dispatch an event.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was only called once.
        expect(listener.mock.calls.length).toBe(1);

        // Check that the target is correct.
        expect(listener.mock.results[0].value).toBe(target);
    });

    test('Listener with `once` flag is removed after first invocation', () => {
        // Create a mock listener.
        const listener = jest.fn((target) => target);

        // Grab the target element.
        const target = jsdomDocument.querySelector('.target-1');

        // Create delegate event listener and define the `once` prop.
        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            (event) => listener(event.target),
            {
                once: true,
            }
        );

        // Dispatch an event.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was called once.
        expect(listener.mock.calls.length).toBe(1);

        // Check that the delegate cache has been cleared.
        expect(delegateCache.has(jsdomDocument)).toBe(false);

        // Reset the listener.
        listener.mockReset();

        // Dispatch another event. This should do nothing.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener hasn't been called.
        expect(listener.mock.calls.length).toBe(0);
    });

    test('Listener is successfully removed when signal is aborted', () => {
        // Create a mock listener.
        const listener = jest.fn((target) => target);
        const abortController = new AbortController();

        // Grab the target element.
        const target = jsdomDocument.querySelector('.target-1');

        // Create delegate event listener and define the `signal` prop.
        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            (event) => listener(event.target),
            {
                signal: abortController.signal,
            }
        );

        // Dispatch an event.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener was called once.
        expect(listener.mock.calls.length).toBe(1);

        // Abort the listener.
        abortController.abort();

        // Reset the listener.
        listener.mockReset();

        // Dispatch another event. This should do nothing.
        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        // Check that the listener hasn't been called.
        expect(listener.mock.calls.length).toBe(0);
    });
});
