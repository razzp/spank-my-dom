/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { dispatch } from '../../src/events/dispatch';

beforeEach(() => {
    document.body.innerHTML = '<div class="target"></div>';
});

test('Dispatching event without bubbles set does not bubble', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    document.addEventListener('click', callback);

    dispatch(target, 'click');

    expect(callback.mock.calls.length).toBe(0);
});

test('Dispatching event with bubbles set to true successfully bubbles', () => {
    const callback = jest.fn((event: Event) => event.target);
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    document.addEventListener('click', callback);

    dispatch(target, 'click', {
        bubbles: true,
    });

    expect(callback.mock.calls.length).toBe(1);
});

test('Dispatching event without detail set creates normal event', () => {
    const callback = jest.fn((event: Event) => event);
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    target.addEventListener('click', callback);

    dispatch(target, 'click');

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.results[0].value).toBeInstanceOf(Event);
});

test('Dispatching event with detail set creates custom event with detail prop', () => {
    const callback = jest.fn((event: Event) => event);
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    target.addEventListener('click', callback);

    dispatch(target, 'click', {
        detail: 'foo',
    });

    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.results[0].value).toBeInstanceOf(CustomEvent);
    expect(callback.mock.results[0].value.detail).toBe('foo');
});

test('If event is not cancellable, returns true', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    target.addEventListener('click', () => void 0);

    const result = dispatch(target, 'click');

    expect(result).toBe(true);
});

test('If event is cancellable and preventDefault() is called, returns false', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    target.addEventListener('click', (event) => event.preventDefault());

    const result = dispatch(target, 'click', {
        cancelable: true,
    });

    expect(result).toBe(false);
});
