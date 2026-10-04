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
