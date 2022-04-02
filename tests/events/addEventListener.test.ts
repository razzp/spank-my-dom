import { DOMWindow, JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';

let jsdomWindow: DOMWindow;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;
});

describe('Adding event listeners', () => {
    test('Event listener is added and invoked as expected', () => {
        // Create a mock callback.
        const callback = jest.fn((event: Event) => event.target);

        // Grab the target element.
        const target = jsdomDocument.querySelector<HTMLElement>('.target-1');

        // Create event listener.
        target && addEventListener(target, 'click', callback);

        // Dispatch an event.
        target?.dispatchEvent(new jsdomWindow.MouseEvent('click'));

        // Check that the callback was invoked once.
        expect(callback.mock.calls.length).toBe(1);
    });
});
