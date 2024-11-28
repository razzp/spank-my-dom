/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { removeClass } from '../../src/classes/removeClass';

beforeEach(() => {
    document.body.innerHTML = '<div class="target foo bar"></div>';
});

test('Single class is successfully removed from element', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);
    removeClass(target, 'foo');

    expect(target.className).toBe('target bar');
});

test('Multiple classes are successfully removed from element', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);
    removeClass(target, 'foo', 'bar');

    expect(target.className).toBe('target');
});
