import { expect, test } from 'vitest';
import { randomNumber } from '../../src/utils/randomNumber';

test('Generate random number within specified range', () => {
    for (let i = 0; i < 1000; i++) {
        const result = randomNumber(-10, 10);

        expect(result).toBeTypeOf('number');
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThanOrEqual(10);
    }
});
