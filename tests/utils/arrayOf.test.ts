import { expect, test, vi } from 'vitest';
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

test('Predicate function receives correct values', () => {
    const callback = vi.fn();

    void arrayOf(5, callback);

    expect(callback).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 5);
    expect(callback).toHaveBeenLastCalledWith(4, 5);
});
