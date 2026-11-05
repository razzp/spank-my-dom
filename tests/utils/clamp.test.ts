import { expect, test } from 'vitest';
import { clamp } from '../../src/utils/clamp';

test('Number within bounds is returned as-is', () => {
    const result = clamp(50, 10, 100);

    expect(result).toBe(50);
});

test('Number greater than upper bound is clamped successfully', () => {
    const result = clamp(150, 10, 100);

    expect(result).toBe(100);
});

test('Number less than upper bound is clamped successfully', () => {
    const result = clamp(0, 10, 100);

    expect(result).toBe(10);
});
