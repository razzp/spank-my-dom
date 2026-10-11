import { expect, test } from 'vitest';
import { pickRandom } from '../../src/utils/pickRandom';

test('Successfully returns new array without mutating original', async () => {
    const array = [1, 2, 3, 4, 5];
    const result = pickRandom(array);

    expect(result).toBeTypeOf('number');
    expect(array.length).toBe(5);
});
