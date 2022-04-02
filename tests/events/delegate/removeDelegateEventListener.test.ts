import { DOMWindow, JSDOM } from 'jsdom';

import { delegateCache } from '../../../src/events/delegate/internal/delegateCache';
import { addDelegateEventListener } from '../../../src/events/delegate/addDelegateEventListener';
import { removeDelegateEventListener } from '../../../src/events/delegate/removeDelegateEventListener';

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

    // This ensures that the `instanceof` operator works inside JSDOM.
    global.Element = jsdomWindow.Element;
});

describe('Removing delegate event listeners', () => {
    test('Removing listener updates corresponding cache entry', () => {
        // Create an empty function.
        const noop = () => void 0;

        // Create delegate event listener and define the `once` prop.
        addDelegateEventListener(jsdomDocument, '.target-1', 'click', noop);

        // Grab the cache entry.
        const cacheEntry = delegateCache.get(jsdomDocument);

        // Check that the cache entry is defined and that it contains an entry.
        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(1);

        // Remove the delegate event listener.
        removeDelegateEventListener(jsdomDocument, '.target-1', 'click', noop);

        // Check that the delegate cache has been cleared.
        expect(delegateCache.has(jsdomDocument)).toBe(false);
    });

    test("Trying to remove a listener that doesn't exist does nothing", () => {
        expect(() =>
            removeDelegateEventListener(
                jsdomDocument,
                '.foo',
                'click',
                () => void 0
            )
        ).not.toThrow();
    });
});
