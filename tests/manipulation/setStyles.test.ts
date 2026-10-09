// @vitest-environment jsdom

import { expect, test } from 'vitest';
import { setStyles } from '../../src/manipulation/setStyles';

test('Successfully set styles on element', () => {
    const element = document.documentElement;

    setStyles(element, {
        '--foo': 'rebeccapurple',
    });

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');
});

test('Successfully set styles on element based on conditions', () => {
    const element = document.documentElement;

    setStyles(element, {
        '--foo': {
            value: 'rebeccapurple',
            condition: true,
        },
    });

    setStyles(element, {
        '--bar': {
            value: 'rebeccapurple',
            condition: (value) => value === 'rebeccapurple',
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
            condition: (value) => value !== 'rebeccapurple',
        },
    });

    expect(element.style.getPropertyValue('--foo')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--bar')).toBe('rebeccapurple');
    expect(element.style.getPropertyValue('--baz')).toBe('');
    expect(element.style.getPropertyValue('--qux')).toBe('');
});
