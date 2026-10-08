// @vitest-environment jsdom

import {
    afterAll,
    afterEach,
    beforeAll,
    beforeEach,
    expect,
    test,
    vi,
} from 'vitest';
import { onPixelRatioChanged } from '../../src/events/onPixelRatioChanged';

class MockMediaQueryList implements MediaQueryList {
    static readonly instances = new Set<MockMediaQueryList>();

    private callback?: () => void;

    constructor() {
        MockMediaQueryList.instances.add(this);
    }

    public media = '';
    public matches = false;
    public onchange = vi.fn();
    public addListener = vi.fn();
    public removeListener = vi.fn();
    public removeEventListener = vi.fn();
    public dispatchEvent = vi.fn();

    public addEventListener = vi
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

beforeAll(() => {
    vi.stubGlobal('matchMedia', () => new MockMediaQueryList());
});

beforeEach(() => {
    MockMediaQueryList.instances.clear();
});

afterAll(() => {
    vi.unstubAllGlobals();
});

afterEach(() => {
    vi.restoreAllMocks();
});

test('Callback is successfully fired when pixel ratio changes', () => {
    const callback = vi.fn();

    expect(MockMediaQueryList.instances.size).toBe(0);

    onPixelRatioChanged(callback);

    expect(MockMediaQueryList.instances.size).toBe(1);

    const instance = [...MockMediaQueryList.instances][0];

    expect(instance.addEventListener).toHaveBeenCalled();
    expect(callback).not.toHaveBeenCalled();

    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(2);

    instance.trigger();

    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(3);

    instance.trigger();

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(2, 3);
});

test('Max value is honoured and callback is not fired needlessly', () => {
    const callback = vi.fn();

    onPixelRatioChanged(callback, {
        max: 2,
    });

    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(4);

    [...MockMediaQueryList.instances][0].trigger();
    [...MockMediaQueryList.instances][0].trigger();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(2);
});

test('Callback successfully fires on invocation', () => {
    const callback = vi.fn();

    onPixelRatioChanged(callback, {
        fireImmediately: true,
    });

    expect(callback).toHaveBeenCalled();
});

test('Successfully stops if provided signal is aborted', () => {
    const callback = vi.fn();
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
    const callback = vi.fn();
    const controller = new AbortController();

    controller.abort();

    expect(MockMediaQueryList.instances.size).toBe(0);

    onPixelRatioChanged(callback, {
        signal: controller.signal,
    });

    expect(MockMediaQueryList.instances.size).toBe(0);
});
