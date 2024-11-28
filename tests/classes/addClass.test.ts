/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { addClass } from '../../src/classes/addClass';

beforeEach(() => {
    document.body.innerHTML = '<div class="target"></div>';
});

test('Single class is successfully added to element', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);
    addClass(target, 'foo');

    expect(target.className).toBe('target foo');
});

test('Multiple classes are successfully added to element', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);
    addClass(target, 'foo', 'bar');

    expect(target.className).toBe('target foo bar');
});
