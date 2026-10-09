// @vitest-environment jsdom

import { expect, test, vi } from 'vitest';
import { setStyles } from '../../src/manipulation/setStyles';

test('Successfully set styles on element', () => {
    const element = document.createElement('div');

    setStyles(element, {
        '--foo': 'rebeccapurple',
    });

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');
});

test('Successfully set styles on element based on conditions', () => {
    const element = document.createElement('div');

    setStyles(element, {
        '--foo': {
            value: 'rebeccapurple',
            condition: true,
        },
    });

    setStyles(element, {
        '--bar': {
            value: 'rebeccapurple',
            condition: () => true,
        },
    });

    setStyles(element, {
        '--baz': {
            value: 'rebeccapurple',
            condition: false,
        },
    });

    setStyles(element, {
        '--qux': {
            value: 'rebeccapurple',
            condition: () => false,
        },
    });

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--bar')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--baz')).toBe('');
    expect(element.style.getPropertyValue('--qux')).toBe('');
});

test('Condition function is passed correct arguments', () => {
    const element = document.createElement('div');
    const callback = vi.fn();

    setStyles(element, {
        '--foo': {
            value: 'rebeccapurple',
            condition: callback,
        },
    });

    expect(callback).toHaveBeenCalledWith('--foo', 'rebeccapurple');
});
