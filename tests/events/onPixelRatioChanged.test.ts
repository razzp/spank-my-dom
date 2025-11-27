/**
 * @jest-environment jsdom
 */

import { onPixelRatioChanged } from '../../src/events/onPixelRatioChanged';

class MockMediaQueryList implements MediaQueryList {
    static readonly instances = new Set<MockMediaQueryList>();

    private callback?: () => void;

    constructor() {
        MockMediaQueryList.instances.add(this);
    }

    public media = '';
    public matches = false;
    public onchange = jest.fn();
    public addListener = jest.fn();
    public removeListener = jest.fn();
    public removeEventListener = jest.fn();
    public dispatchEvent = jest.fn();

    public addEventListener = jest
        .fn()
        .mockImplementation(
            (
                _: never,
                callback: () => void,
                options?: AddEventListenerOptions,
            ) => {
                this.callback = callback;

                options?.signal?.addEventListener('abort', () => {
                    this.callback = undefined;
                });
            },
        );

    public trigger(): void {
        this.callback?.();
    }
}

const initialValue = global.matchMedia;

beforeAll(() => {
    global.matchMedia = () => new MockMediaQueryList();
});

beforeEach(() => {
    MockMediaQueryList.instances.clear();
});

afterAll(() => {
    global.matchMedia = initialValue;
});

test('Callback is successfully fired when pixel ratio changes', () => {
    const callback = jest.fn();

    expect(MockMediaQueryList.instances.size).toBe(0);

    onPixelRatioChanged(callback);

    expect(MockMediaQueryList.instances.size).toBe(1);

    const instance = [...MockMediaQueryList.instances][0];

    expect(instance.addEventListener).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();

    instance.trigger();

    expect(callback).toHaveBeenCalledWith(expect.any(Number));
});

test('Successfully stops if provided signal is aborted', () => {
    const callback = jest.fn();
    const controller = new AbortController();

    expect(MockMediaQueryList.instances.size).toBe(0);

    onPixelRatioChanged(callback, {
        signal: controller.signal,
    });

    expect(MockMediaQueryList.instances.size).toBe(1);

    const instance = [...MockMediaQueryList.instances][0];

    expect(instance.addEventListener).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();

    controller.abort();
    instance.trigger();

    expect(callback).not.toHaveBeenCalled();
});

test('Short circuits if signal is provided that has already been aborted', () => {
    const callback = jest.fn();
    const controller = new AbortController();

    controller.abort();

    expect(MockMediaQueryList.instances.size).toBe(0);

    onPixelRatioChanged(callback, {
        signal: controller.signal,
    });

    expect(MockMediaQueryList.instances.size).toBe(0);
});
