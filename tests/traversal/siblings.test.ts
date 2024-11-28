/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { siblings } from '../../src/traversal/siblings';

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

test('Given no selector, successfully returns all siblings', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = siblings(target);

    expect(result.length).toBe(8);
});

test('Given a selector, successfully returns all siblings that match', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = siblings(target, '.foo');

    expect(result.length).toBe(4);
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(siblings(target, '.baz')).toEqual([]);
});
