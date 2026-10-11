// @vitest-environment jsdom

import { afterEach, expect, test, vi } from 'vitest';
import { getDevicePixelRatio } from '../../src/utils/getDevicePixelRatio';

afterEach(() => {
    vi.restoreAllMocks();
});

test('Successfully returns unaltered pixel ratio', async () => {
    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(2);

    expect(getDevicePixelRatio()).toBe(2);
});

test('Successfully honours maximum pixel ratio', async () => {
    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(2);

    expect(getDevicePixelRatio({ max: 1 })).toBe(1);
    expect(getDevicePixelRatio({ max: 10 })).toBe(2);
});

test('Successfully rounds fractional ratios up and down', async () => {
    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(1.5);

    expect(getDevicePixelRatio({ round: 'down' })).toBe(1);
    expect(getDevicePixelRatio({ round: 'up' })).toBe(2);
});
