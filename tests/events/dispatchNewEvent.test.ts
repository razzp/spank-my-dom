import { JSDOM } from 'jsdom';

import { addEventListener } from '../../src/events/addEventListener';
import { dispatchNewEvent } from '../../src/events/dispatchNewEvent';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.CustomEvent = window.CustomEvent;
    global.Event = window.Event;
});

test('Dispatching event without bubbles set does not bubble', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(document, 'click', callback);
    dispatchNewEvent(target, 'click');

    expect(callback.mock.calls.length).toBe(0);
});

test('Dispatching event with bubbles set to true successfully bubbles', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(document, 'click', callback);

    dispatchNewEvent(target, 'click', {
        bubbles: true,
    });

    expect(callback.mock.calls.length).toBe(1);
});

test('Dispatching event without detail set creates normal event', () => {
    const callback = jest.fn((event: Event) => event);
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(target, 'click', callback);
    dispatchNewEvent(target, 'click');

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.results[0].value).toBeInstanceOf(Event);
});

test('Dispatching event with detail set creates custom event with detail prop', () => {
    const callback = jest.fn((event: Event) => event);
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(target, 'click', callback);

    dispatchNewEvent(target, 'click', {
        detail: 'foo',
    });

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.results[0].value).toBeInstanceOf(CustomEvent);
    expect(callback.mock.results[0].value.detail).toBe('foo');
});

test('If event is not cancellable, returns true', () => {
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(target, 'click', () => void 0);
    const result = dispatchNewEvent(target, 'click');

    expect(result).toBe(true);
});

test('If event is cancellable and preventDefault() is called, returns false', () => {
    const target = document.querySelector<HTMLElement>('.target');

    if (!target) {
        throw new Error('Element not found');
    }

    addEventListener(target, 'click', (event) => event.preventDefault());

    const result = dispatchNewEvent(target, 'click', {
        cancelable: true,
    });

    expect(result).toBe(false);
});
