import { loadImages } from '../../src/images/loadImages';
import { MockImage, MockImageFails, MockImageSucceeds } from './loadImage.test';

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
        expect(error).toBeUndefined();
    }
});
