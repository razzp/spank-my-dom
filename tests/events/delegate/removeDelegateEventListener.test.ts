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

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;
});

describe('Removing delegate event listeners', () => {
    test('Removing listener updates corresponding cache entry', () => {
        const noop = () => void 0;

        addDelegateEventListener(jsdomDocument, '.target-1', 'click', noop);

        const cacheEntry = delegateCache.get(jsdomDocument);

        expect(cacheEntry).toBeDefined();
        expect(cacheEntry?.size).toBe(1);

        removeDelegateEventListener(jsdomDocument, '.target-1', 'click', noop);

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
