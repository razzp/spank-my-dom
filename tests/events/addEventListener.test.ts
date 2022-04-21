import { DOMWindow, JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';

let jsdomWindow: DOMWindow;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        `
    );

    jsdomWindow = window;

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Event listener is added and invoked as expected', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target-1');

    target && addEventListener(target, 'click', callback);

    target?.dispatchEvent(new jsdomWindow.MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(1);
});
