/**
 * @jest-environment jsdom
 */

import { loadImage } from '../../src/images/loadImage';
import { MockImage } from './MockImage';

beforeAll(() => {
    // JSDOM doesn't implement the `decode` method.
    global.Image = MockImage as any;
});

test('Successful load resolves with image', async () => {
    MockImage.decodeWillSucceed = true;

    expect.assertions(2);

    try {
        const src =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII';
        const image = await loadImage(src);

        expect(image).toBeInstanceOf(MockImage);
        expect(image.src).toBe(src);
    } catch {
        // Do nothing.
    }
});

test('Unsuccessful load rejects', async () => {
    MockImage.decodeWillSucceed = false;

    expect.assertions(1);

    try {
        await loadImage('');
    } catch (error) {
        expect(error).toBeInstanceOf(DOMException);
    }
});
