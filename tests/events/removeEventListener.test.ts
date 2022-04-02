import { DOMWindow, JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';
import { removeEventListener } from '../../src/events/removeEventListener';

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

describe('Removing event listeners', () => {
    test('Event listener is removed successfully', () => {
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

        // Reset the mock callback.
        callback.mockReset();

        // Remove event listener.
        target && removeEventListener(target, 'click', callback);

        // Dispatch another event. This should do nothing.
        target?.dispatchEvent(new jsdomWindow.MouseEvent('click'));

        // Check that the callback hasn't been invoked.
        expect(callback.mock.calls.length).toBe(0);
    });
});
