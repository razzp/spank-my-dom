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
