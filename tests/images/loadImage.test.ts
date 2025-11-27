/**
 * @jest-environment jsdom
 */

import { loadImage } from '../../src/images/loadImage';

const testImage =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

class MockImage {
    static decodeWillSucceed = false;

    public src?: string;

    public async decode(): Promise<void> {
        if (!MockImage.decodeWillSucceed) {
            throw new DOMException();
        }
    }
}

beforeAll(() => {
    // biome-ignore lint/suspicious/noExplicitAny: Mock implementation.
    global.Image = MockImage as any;
});

test('Successful load resolves with image', async () => {
    MockImage.decodeWillSucceed = true;

    expect.assertions(2);

    try {
        const src = testImage;
        const image = await loadImage(src);

        expect(image).toBeInstanceOf(MockImage);
        expect(image.src).toBe(src);
    } catch {}
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
