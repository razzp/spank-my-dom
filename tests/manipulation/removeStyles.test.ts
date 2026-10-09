// @vitest-environment jsdom

import { expect, test, vi } from 'vitest';
import { removeStyles } from '../../src/manipulation/removeStyles';

test('Successfully remove styles on element', () => {
    const element = document.createElement('div');

    element.style.setProperty('--foo', 'rebeccapurple');

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');

    removeStyles(element, ['--foo']);

    expect(element.style.getPropertyValue('--foo')).toBe('');
});

test('Successfully remove styles on element based on conditions', () => {
    const element = document.createElement('div');

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
            '--bar': () => true,
            '--baz': false,
            '--qux': () => false,
        },
    ]);

    expect(element.style.getPropertyValue('--foo')).toBe('');
    expect(element.style.getPropertyValue('--bar')).toBe('');
    expect(element.style.getPropertyValue('--baz')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--qux')).toBe('rebeccapurple');
});

test('Condition function is passed correct arguments', () => {
    const element = document.createElement('div');
    const callback = vi.fn();

    removeStyles(element, [
        {
            '--foo': callback,
        },
    ]);

    expect(callback).toHaveBeenCalledWith('--foo');
});
