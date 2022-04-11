import { JSDOM } from 'jsdom';

import { arrayFrom } from '../../src/array/arrayFrom';

test('Given an iterable, returns an array of corresponding values', () => {
    const result = arrayFrom(
        (function* () {
            yield 0;
            yield 1;
        })()
    );

    expect(result).toEqual([0, 1]);
});

test('Given a `NodeList`, returns an array of corresponding nodes', () => {
    const { window: jsdomWindow } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target"></div>
            <div class="target"></div>
            `
    );

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;

    const result = arrayFrom(jsdomWindow.document.querySelectorAll('.target'));

    expect(result.length).toBe(2);
    expect(result.every((item) => item instanceof Element)).toBe(true);
});
