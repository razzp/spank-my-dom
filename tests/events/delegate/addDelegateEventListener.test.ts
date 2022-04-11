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
            <div class="target target-2"></div>
        </div>
        `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;
});

describe('Adding delegate event listeners', () => {
    test('Adding a listener to a new target adds a new entry to the cache', () => {
        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            () => void 0
        );

        expect(delegateCache.has(jsdomDocument)).toBe(true);
    });

    test('Adding a listener to an existing target updates the existing cache entry', () => {
        delegateCache.set(jsdomDocument, new Set([undefined as never]));

        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            () => void 0
        );

        const cacheEntry = delegateCache.get(jsdomDocument);

        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(2);
    });
});

describe('Triggering delegate event listeners', () => {
    test('Single matching descendant of target is found and listener is called with correct target', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = jsdomDocument.querySelector('.target-1');

        addDelegateEventListener(jsdomDocument, '.target-1', 'click', callback);

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Multiple matching descendants of target are found and listeners are called with correct targets', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target1 = jsdomDocument.querySelector('.target-1');
        const target2 = jsdomDocument.querySelector('.target-2');

        addDelegateEventListener(jsdomDocument, '.target', 'click', callback);

        target2?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(2);
        expect(callback.mock.results[0].value).toBe(target2);
        expect(callback.mock.results[1].value).toBe(target1);
    });

    test('Listener object with `handleEvent` prop is called with correct target', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = jsdomDocument.querySelector('.target-1');

        addDelegateEventListener(jsdomDocument, '.target-1', 'click', {
            handleEvent: callback,
        });

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Calling `stopDelegation()` on an event prevents any further action', () => {
        const callback = jest.fn((event: DelegateEvent<Event>) => {
            event.stopDelegation();
            return event.target;
        });

        const target = jsdomDocument.querySelector('.target-2');

        addDelegateEventListener(jsdomDocument, '.target', 'click', callback);

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Listener with `once` flag is removed after first invocation', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = jsdomDocument.querySelector('.target-1');

        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            callback,
            {
                once: true,
            }
        );

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(1);
        expect(delegateCache.has(jsdomDocument)).toBe(false);

        callback.mockReset();

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(0);
    });

    test('Listener is successfully removed when signal is aborted', () => {
        const callback = jest.fn((event: Event) => event.target);
        const abortController = new AbortController();
        const target = jsdomDocument.querySelector('.target-1');

        addDelegateEventListener(
            jsdomDocument,
            '.target-1',
            'click',
            callback,
            {
                signal: abortController.signal,
            }
        );

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(1);

        abortController.abort();

        callback.mockReset();

        target?.dispatchEvent(
            new jsdomWindow.MouseEvent('click', { bubbles: true })
        );

        expect(callback.mock.calls.length).toBe(0);
    });
});
