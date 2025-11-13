/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { getSiblings } from '../../src/traversal/getSiblings';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="sibling-1"></div>
        <div class="sibling-2"></div>
        <div class="target"></div>
        <div class="sibling-3"></div>
        <div class="sibling-4"></div>
    `;
});

test('todo', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = getSiblings('all', target);

    expect(result.length).toBe(4);

    expect(result.map((x) => x.className)).toEqual([
        'sibling-1',
        'sibling-2',
        'sibling-3',
        'sibling-4',
    ]);
});

test('todo', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = getSiblings('before', target);

    expect(result.length).toBe(2);
    expect(result.map((x) => x.className)).toEqual(['sibling-1', 'sibling-2']);
});

test('todo', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = getSiblings('after', target);

    expect(result.length).toBe(2);
    expect(result.map((x) => x.className)).toEqual(['sibling-3', 'sibling-4']);
});

test('todo', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = getSiblings('all', target, '.sibling-1');

    expect(result.length).toBe(1);
    expect(result[0].className).toEqual('sibling-1');
});
