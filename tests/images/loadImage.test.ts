import { loadImage } from '../../src/images/loadImage';

export abstract class MockImage {
    private __src = '';

    public onerror?: () => void;
    public onload?: () => void;

    public abstract callback(): void;

    public get src(): string {
        return this.__src;
    }

    public set src(value: string) {
        this.__src = value;
        globalThis.setTimeout(() => this.callback(), 100);
    }
}

export class MockImageSucceeds extends MockImage {
    public override callback(): void {
        this.onload?.();
    }
}

export class MockImageFails extends MockImage {
    public override callback(): void {
        this.onerror?.();
    }
}

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
        expect(error).toBeUndefined();
    }
});
