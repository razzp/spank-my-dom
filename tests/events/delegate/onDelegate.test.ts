import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { delegateCache } from '../../../src/events/delegate/internal/delegateCache';
import { onDelegate } from '../../../src/events/delegate/onDelegate';

import type { DelegateEvent } from '../../../src/events/delegate/aliases/DelegateEvent';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1">
            <div class="target target-2"></div>
        </div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
    global.MouseEvent = window.MouseEvent;
});

describe('Adding delegate event listeners', () => {
    test('Adding a listener to a new target adds a new entry to the cache', () => {
        onDelegate(document, '.target-1', 'click', () => void 0);

        expect(delegateCache.has(document)).toBe(true);
    });

    test('Adding a listener to an existing target updates the existing cache entry', () => {
        delegateCache.set(document, new Set());

        onDelegate(document, '.target-1', 'click', () => void 0);

        const cacheEntry = delegateCache.get(document);

        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(1);
    });

    test('Attempting to add the same listener again does nothing', () => {
        const noop = () => void 0;

        delegateCache.set(document, new Set());

        for (let i = 0; i < 2; i++) {
            onDelegate(document, '.target-1', 'click', noop);
        }

        const cacheEntry = delegateCache.get(document);

        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(1);
    });
});

describe('Triggering delegate event listeners', () => {
    test('Single matching descendant of target is found and listener is called with correct target', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = guarantee(document.querySelector('.target-1'));

        onDelegate(document, '.target-1', 'click', callback);

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Multiple matching descendants of target are found and listeners are called with correct targets', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target1 = guarantee(document.querySelector('.target-1'));
        const target2 = guarantee(document.querySelector('.target-2'));

        onDelegate(document, '.target', 'click', callback);

        target2.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(2);
        expect(callback.mock.results[0].value).toBe(target2);
        expect(callback.mock.results[1].value).toBe(target1);
    });

    test('Listener object with `handleEvent` prop is called with correct target', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = guarantee(document.querySelector('.target-1'));

        onDelegate(document, '.target-1', 'click', {
            handleEvent: callback,
        });

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Calling `stopDelegation()` on an event prevents any further action', () => {
        const callback = jest.fn((event: DelegateEvent<Event>) => {
            event.stopDelegation();
            return event.target;
        });

        const target = guarantee(document.querySelector('.target-2'));

        onDelegate(document, '.target', 'click', callback);

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(1);
        expect(callback.mock.results[0].value).toBe(target);
    });

    test('Listener with `once` flag is removed after first invocation', () => {
        const callback = jest.fn((event: Event) => event.target);
        const target = guarantee(document.querySelector('.target-1'));

        onDelegate(document, '.target-1', 'click', callback, {
            once: true,
        });

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(1);
        expect(delegateCache.has(document)).toBe(false);

        callback.mockReset();

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(0);
    });

    test('Listener is successfully removed when signal is aborted', () => {
        const callback = jest.fn((event: Event) => event.target);
        const abortController = new AbortController();
        const target = guarantee(document.querySelector('.target-1'));

        onDelegate(document, '.target-1', 'click', callback, {
            signal: abortController.signal,
        });

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(1);

        abortController.abort();

        callback.mockReset();

        target.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(callback.mock.calls.length).toBe(0);
    });
});
