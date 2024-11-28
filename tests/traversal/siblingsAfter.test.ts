/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { siblingsAfter } from '../../src/traversal/siblingsAfter';

beforeAll(() => {
    document.body.innerHTML = `
        <div></div>
        <div class="foo"></div>
        <div class="foo"></div>
        <div></div>
        <div class="target"></div>
        <div></div>
        <div class="foo"></div>
        <div class="foo"></div>
        <div></div>
    `;
});

test('Given no selector, successfully returns all following siblings', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = siblingsAfter(target);

    expect(result.length).toBe(4);
});

test('Given a selector, successfully returns all following siblings that match', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = siblingsAfter(target, '.foo');

    expect(result.length).toBe(2);
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(siblingsAfter(target, '.baz')).toEqual([]);
});
