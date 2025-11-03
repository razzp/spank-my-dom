/**
 * @jest-environment jsdom
 */

import { scaleToPixelRatio } from '../../src/utils/scaleToPixelRatio';

Object.defineProperty(window, 'devicePixelRatio', {
    get() {
        return 1.5;
    },
    configurable: true,
});

test('Successfully scales value relative to pixel ratio', () => {
    expect(scaleToPixelRatio(100)).toBe(150);
    expect(scaleToPixelRatio(101)).toBe(151.5);
});
