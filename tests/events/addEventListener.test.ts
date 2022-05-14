import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.MouseEvent = window.MouseEvent;
});

test('Event listener is added and invoked as expected', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = guarantee(document.querySelector<HTMLElement>('.target-1'));

    addEventListener(target, 'click', callback);

    target.dispatchEvent(new MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(1);
});
