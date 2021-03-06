import { JSDOM } from 'jsdom';

import { loadImage } from '../../src/images/loadImage';
import { MockImage, MockImageFails, MockImageSucceeds } from './MockImage';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.DOMException = window.DOMException;
});

test('Successful load resolves with image', async () => {
    (global.Image as any) = MockImageSucceeds;

    expect.assertions(2);

    try {
        const image = await loadImage('foo');

        expect(image).toBeInstanceOf(MockImage);
        expect(image.src).toBe('foo');
    } catch {
        // Do nothing.
    }
});

test('Unsuccessful load rejects', async () => {
    (global.Image as any) = MockImageFails;

    expect.assertions(1);

    try {
        await loadImage('');
    } catch (error) {
        expect(error).toBeInstanceOf(DOMException);
    }
});
