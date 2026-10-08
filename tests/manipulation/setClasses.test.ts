// @vitest-environment jsdom

import { expect, test } from 'vitest';
import { setClasses } from '../../src/manipulation/setClasses';

test('Successfully adds class from string', () => {
    const element = document.createElement('div');

    setClasses(element, 'foo');

    expect(element.className).toBe('foo');
});

test('Successfully adds classes based on conditions', () => {
    const element = document.createElement('div');

    setClasses(element, {
        foo: true,
        bar: () => true,
        baz: false,
        qux: () => false,
    });

    expect(element.className).toBe('foo bar');
});

test('Successfully adds multiple classes', () => {
    const element = document.createElement('div');

    setClasses(element, 'foo', { bar: true }, 'baz', { qux: false });

    expect(element.className).toBe('foo bar baz');
});
