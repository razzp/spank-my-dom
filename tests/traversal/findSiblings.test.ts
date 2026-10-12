// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeAll, expect, test } from 'vitest';
import { findSiblings } from '../../src/traversal/findSiblings';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="sibling-1"></div>
        <div class="sibling-2"></div>
        <div class="target"></div>
        <div class="sibling-3"></div>
        <div class="sibling-4"></div>
    `;
});

test('Successfully returns all siblings', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = findSiblings('all', target);

    expect(result.length).toBe(4);

    expect(result.map((x) => x.className)).toEqual([
        'sibling-1',
        'sibling-2',
        'sibling-3',
        'sibling-4',
    ]);
});

test('Successfully returns all siblings before the target', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = findSiblings('before', target);

    expect(result.length).toBe(2);
    expect(result.map((x) => x.className)).toEqual(['sibling-1', 'sibling-2']);
});

test('Successfully returns all siblings after the target', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = findSiblings('after', target);

    expect(result.length).toBe(2);
    expect(result.map((x) => x.className)).toEqual(['sibling-3', 'sibling-4']);
});

test('Successfully filters the matched siblings', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = findSiblings('all', target, '.sibling-1');

    expect(result.length).toBe(1);
    expect(result[0].className).toEqual('sibling-1');
});
