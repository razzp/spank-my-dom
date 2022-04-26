import { JSDOM } from 'jsdom';

import { loadImages } from '../../src/images/loadImages';
import { MockImage, MockImageFails, MockImageSucceeds } from './MockImage';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.DOMException = window.DOMException;
});

test('Successful load resolves with images', async () => {
    (global.Image as any) = MockImageSucceeds;

    expect.assertions(2);

    try {
        const images = await loadImages('foo', 'bar');

        expect(images.every((image) => image instanceof MockImage)).toBe(true);
        expect(images.map((image) => image.src)).toEqual(['foo', 'bar']);
    } catch {
        // Do nothing.
    }
});

test('Unsuccessful load rejects', async () => {
    (global.Image as any) = MockImageFails;

    expect.assertions(1);

    try {
        await loadImages('');
    } catch (error) {
        expect(error).toBeInstanceOf(DOMException);
    }
});
