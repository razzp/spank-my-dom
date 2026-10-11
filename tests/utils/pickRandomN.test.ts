import { expect, test } from 'vitest';
import { pickRandomN } from '../../src/utils/pickRandomN';

test('Successfully returns new array without mutating original', async () => {
    const array = [1, 2, 3, 4, 5];
    const result = pickRandomN(array, 2);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(array.length).toBe(5);
});

test('Successfully handles requested amount being greater than array length', async () => {
    const array = [1, 2, 3, 4, 5];
    const result = pickRandomN(array, 100);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(5);
});
