// @vitest-environment jsdom

import { expect, test } from 'vitest';
import { removeStyles } from '../../src/manipulation/removeStyles';

test('Successfully remove styles on element', () => {
    const element = document.documentElement;

    element.style.setProperty('--foo', 'rebeccapurple');

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');

    removeStyles(element, ['--foo']);

    expect(element.style.getPropertyValue('--foo')).toBe('');
});

test('Successfully remove styles on element based on conditions', () => {
    const element = document.documentElement;

    element.style.setProperty('--foo', 'rebeccapurple');
    element.style.setProperty('--bar', 'rebeccapurple');
    element.style.setProperty('--baz', 'rebeccapurple');
    element.style.setProperty('--qux', 'rebeccapurple');

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--bar')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--baz')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--qux')).toBe('rebeccapurple');

    removeStyles(element, [
        {
            '--foo': true,
            '--bar': (value) => value === '--bar',
            '--baz': false,
            '--qux': (value) => value !== '--qux',
        },
    ]);

    expect(element.style.getPropertyValue('--foo')).toBe('');
    expect(element.style.getPropertyValue('--bar')).toBe('');
    expect(element.style.getPropertyValue('--baz')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--qux')).toBe('rebeccapurple');
});
