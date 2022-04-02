import { JSDOM } from 'jsdom';

import { arrayFrom } from '../../../src/array/arrayFrom';

describe('Convert various iterable/array-like types to an array', () => {
    test('Convert iterable to array', () => {
        // Convert an iterable to an array.
        const result = arrayFrom(
            (function* () {
                yield 0;
                yield 1;
            })()
        );

        // Check that the conversion was successful.
        expect(result).toEqual([0, 1]);
    });

    test('Convert NodeList to array', () => {
        const { window: jsdomWindow } = new JSDOM(
            `<!DOCTYPE html>
            <div class="target"></div>
            <div class="target"></div>
            `
        );

        // This ensures that the `instanceof` operator works inside JSDOM.
        global.Element = jsdomWindow.Element;

        // Convert a `NodeList` to an array.
        const result = arrayFrom(
            jsdomWindow.document.querySelectorAll('.target')
        );

        // Check that the conversion was successful.
        expect(result.length).toBe(2);
        expect(result.every((item) => item instanceof Element)).toBe(true);
    });
});
