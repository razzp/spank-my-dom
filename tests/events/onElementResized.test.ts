/**
 * @jest-environment jsdom
 */

import { onElementResized } from '../../src/events/onElementResized';

function createMockSize(): ResizeObserverSize {
    return {
        blockSize: 100,
        inlineSize: 100,
    };
}

interface MockResizeObserverEntry {
    borderBoxSize: ResizeObserverSize[];
    contentBoxSize: ResizeObserverSize[];
}

class MockResizeObserver implements ResizeObserver {
    static readonly instances = new Set<MockResizeObserver>();

    constructor(private readonly callback: ResizeObserverCallback) {
        MockResizeObserver.instances.add(this);
    }

    public observe = jest.fn();
    public unobserve = jest.fn();
    public disconnect = jest.fn();

    public trigger(entries: MockResizeObserverEntry[]): void {
        // biome-ignore lint/suspicious/noExplicitAny: Partial implementation for mock.
        this.callback(entries as any, this);
    }
}

const initialValue = global.ResizeObserver;

beforeAll(() => {
    global.ResizeObserver = MockResizeObserver;
});

beforeEach(() => {
    MockResizeObserver.instances.clear();
});

afterAll(() => {
    global.ResizeObserver = initialValue;
});

test('Successfully triggered when element is resized', () => {
    const callback = jest.fn();
    const element = document.createElement('div');

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback);

    expect(MockResizeObserver.instances.size).toBe(1);

    const instance = [...MockResizeObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();

    const mockSize = createMockSize();

    instance.trigger([
        {
            borderBoxSize: [mockSize],
            contentBoxSize: [],
        },
    ]);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBe(mockSize);
});

test('Successfully returns correct size data for specified box model', () => {
    const callback = jest.fn();
    const element = document.createElement('div');

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback, {
        boxModel: 'borderBox',
    });

    onElementResized(element, callback, {
        boxModel: 'contentBox',
    });

    expect(MockResizeObserver.instances.size).toBe(2);

    const [boxModelInstance, contentModelInstance] = [
        ...MockResizeObserver.instances,
    ];

    expect(boxModelInstance).toBeDefined();
    expect(contentModelInstance).toBeDefined();

    expect(boxModelInstance.observe).toHaveBeenCalled();
    expect(contentModelInstance.observe).toHaveBeenCalled();

    const boxModelSize = createMockSize();
    const contentModelSize = createMockSize();

    boxModelInstance.trigger([
        {
            borderBoxSize: [boxModelSize],
            contentBoxSize: [],
        },
    ]);

    contentModelInstance.trigger([
        {
            borderBoxSize: [],
            contentBoxSize: [contentModelSize],
        },
    ]);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback.mock.calls[0][0]).toBe(boxModelSize);
    expect(callback.mock.calls[1][0]).toBe(contentModelSize);
});

test('Successfully disconnects if provided signal is aborted', () => {
    const callback = jest.fn();
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
    const callback = jest.fn();
    const element = document.createElement('div');
    const controller = new AbortController();

    controller.abort();

    expect(MockResizeObserver.instances.size).toBe(0);

    onElementResized(element, callback, {
        signal: controller.signal,
    });

    expect(MockResizeObserver.instances.size).toBe(0);
});
