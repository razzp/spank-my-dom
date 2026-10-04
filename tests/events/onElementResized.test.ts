// @vitest-environment jsdom

import { afterAll, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import { onElementResized } from '../../src/events/onElementResized';

class MockResizeObserver implements ResizeObserver {
    static readonly instances = new Set<MockResizeObserver>();

    constructor(private readonly callback: ResizeObserverCallback) {
        MockResizeObserver.instances.add(this);
    }

    public observe = vi.fn();
    public unobserve = vi.fn();
    public disconnect = vi.fn();

    public trigger(entries: symbol[]): void {
        // biome-ignore lint/suspicious/noExplicitAny: Partial implementation for mock.
        this.callback(entries as any, this);
    }
}

beforeAll(() => {
    vi.stubGlobal('ResizeObserver', MockResizeObserver);
});

beforeEach(() => {
    MockResizeObserver.instances.clear();
});

afterAll(() => {
    vi.unstubAllGlobals();
});

test('Successfully triggered when element is resized', () => {
    const callback = vi.fn();
    const element = document.createElement('div');

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback);

    expect(MockResizeObserver.instances.size).toBe(1);

    const instance = [...MockResizeObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.observe.mock.calls[0][0]).toBe(element);

    const mockSize = createMockSize();

    instance.trigger([
        {
            borderBoxSize: [mockSize],
            contentBoxSize: [mockSize],
        },
    ]);

    expect(callback).toHaveBeenCalledWith({
        element,
        borderBoxSize: mockSize,
        contentBoxSize: mockSize,
    });
});

test('Successfully disconnects if provided signal is aborted', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    const controller = new AbortController();

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback, {
        signal: controller.signal,
    });

    expect(MockResizeObserver.instances.size).toBe(1);

    const instance = [...MockResizeObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.disconnect).not.toHaveBeenCalled();

    controller.abort();

    expect(instance.disconnect).toHaveBeenCalled();
});

test('Short circuits if signal is provided that has already been aborted', () => {
    const callback = vi.fn();
    const element = document.createElement('div');
    const controller = new AbortController();

    controller.abort();

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback, {
        signal: controller.signal,
    });

    expect(MockResizeObserver.instances.size).toBe(0);
});
