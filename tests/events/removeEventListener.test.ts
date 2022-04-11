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

test('Event listener is removed successfully', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = jsdomDocument.querySelector<HTMLElement>('.target-1');

    target && addEventListener(target, 'click', callback);

    target?.dispatchEvent(new jsdomWindow.MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(1);

    callback.mockReset();

    target && removeEventListener(target, 'click', callback);

    target?.dispatchEvent(new jsdomWindow.MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(0);
});
