import { clamp } from '../../src/utils/clamp';

test('Value below range is clamped correctly', () => {
    expect(clamp(9, 10, 20)).toBe(10);
});

test('Value above range is clamped correctly', () => {
    expect(clamp(21, 10, 20)).toBe(20);
});

test('Value within range is not clamped', () => {
    expect(clamp(15, 10, 20)).toBe(15);
});
