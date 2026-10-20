import { expect, test } from 'vitest';
import { arrayOf } from '../../src/utils/arrayOf';

test('Make array of correct length and populate with static value', () => {
    const array = arrayOf(5, 'foo');

    expect(Array.isArray(array)).toBe(true);
    expect(array).toHaveLength(5);
    expect(array.every((x) => x === 'foo')).toBe(true);
});

test('Make array of correct length and populate using predicate function', () => {
    const array = arrayOf(5, (index) => index);

    expect(Array.isArray(array)).toBe(true);
    expect(array).toHaveLength(5);
    expect(array).toEqual([0, 1, 2, 3, 4]);
});
