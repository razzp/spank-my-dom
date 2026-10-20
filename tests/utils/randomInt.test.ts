import { expect, test } from 'vitest';
import { randomInt } from '../../src/utils/randomInt';

test('Generate random integer within specified range', () => {
    for (let i = 0; i < 1000; i++) {
        const result = randomInt(-10, 10);

        expect(Number.isInteger(result)).toBe(true);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThanOrEqual(10);
    }
});
