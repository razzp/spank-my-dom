// @vitest-environment jsdom

import { expect, test, vi } from 'vitest';
import { removeClasses } from '../../src/manipulation/removeClasses';

test('Successfully removes class from string', () => {
    const element = document.createElement('div');

    element.className = 'foo';

    expect(element.className).toBe('foo');

    removeClasses(element, ['foo']);

    expect(element.className).toBe('');
});

test('Successfully removes classes based on conditions', () => {
    const element = document.createElement('div');

    element.className = 'foo bar baz qux';

    expect(element.className).toBe('foo bar baz qux');

    removeClasses(element, [
        {
            foo: true,
            bar: () => true,
            baz: false,
            qux: () => false,
        },
    ]);

    expect(element.className).toBe('baz qux');
});

test('Successfully removes multiple classes', () => {
    const element = document.createElement('div');

    element.className = 'foo bar baz qux';

    expect(element.className).toBe('foo bar baz qux');

    removeClasses(element, [
        'foo',
        {
            bar: true,
            baz: () => false,
        },
    ]);

    expect(element.className).toBe('baz qux');
});

test('Condition function gets passed the correct token', () => {
    const element = document.createElement('div');
    const callback = vi.fn();

    removeClasses(element, [
        {
            foo: callback,
        },
    ]);

    expect(callback).toHaveBeenCalledWith('foo');
});
