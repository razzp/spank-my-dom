import { JSDOM } from 'jsdom';

import { delegateCache } from '../../../src/events/delegate/internal/delegateCache';
import { addDelegateEventListener } from '../../../src/events/delegate/addDelegateEventListener';
import { removeDelegateEventListener } from '../../../src/events/delegate/removeDelegateEventListener';

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
});

describe('Removing delegate event listeners', () => {
    test('Removing listener updates corresponding cache entry', () => {
        const noop = () => void 0;

        addDelegateEventListener(document, '.target-1', 'click', noop);

        const cacheEntry = delegateCache.get(document);

        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(1);

        removeDelegateEventListener(document, '.target-1', 'click', noop);

        expect(delegateCache.has(document)).toBe(false);
    });

    test("Trying to remove a listener from a target that doesn't exist in the cache does nothing", () => {
        expect(() =>
            removeDelegateEventListener(document, '.foo', 'click', () => void 0)
        ).not.toThrow();
    });

    test("Trying to remove a listener that doesn't exist in the cache does nothing", () => {
        delegateCache.set(document, new Set());

        expect(() =>
            removeDelegateEventListener(document, '.foo', 'click', () => void 0)
        ).not.toThrow();
    });
});
