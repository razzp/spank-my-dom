/**
 * @jest-environment jsdom
 */

import { onPixelRatioChange } from '../../src/events/onPixelRatioChange';

class MockMediaQueryList {
    static instances = new Set<MockMediaQueryList>();

    static triggerAll(): void {
        // Important to clone the set here otherwise it will loop infinitely
        // as listeners are added during the callback logic.
        for (const instance of [...MockMediaQueryList.instances]) {
            instance.trigger();
        }
    }

    constructor() {
        MockMediaQueryList.instances.add(this);
    }

    private readonly listeners = new Map<symbol, () => void>();

    public addEventListener(
        _: never,
        callback: () => void,
        options?: AddEventListenerOptions,
    ): void {
        const id = Symbol();

        this.listeners.set(id, callback);

        options?.signal?.addEventListener('abort', () => {
            this.listeners.delete(id);
        });
    }

    public trigger(): void {
        for (const [id, callback] of this.listeners) {
            this.listeners.delete(id);
            callback();
        }

        MockMediaQueryList.instances.delete(this);
    }
}

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => new MockMediaQueryList(),
    });
});

test('foo', () => {
    const callback = jest.fn();

    onPixelRatioChange(callback);

    MockMediaQueryList.triggerAll();

    expect(callback).toHaveBeenCalled();
});
