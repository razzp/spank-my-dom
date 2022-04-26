import { JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';
import { removeEventListener } from '../../src/events/removeEventListener';

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

test('Event listener is removed successfully', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target-1');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(target, 'click', callback);

    target.dispatchEvent(new MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(1);

    callback.mockReset();

    removeEventListener(target, 'click', callback);

    target.dispatchEvent(new MouseEvent('click'));

    expect(callback.mock.calls.length).toBe(0);
});
