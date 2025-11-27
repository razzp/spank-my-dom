/**
 * @jest-environment jsdom
 */

import { onElementIntersected } from '../../src/events/onElementIntersected';

interface MockIntersectionObserverEntry {
    intersectionRatio: symbol;
    isIntersecting: symbol;
}

class MockIntersectionObserver implements IntersectionObserver {
    static readonly instances = new Set<MockIntersectionObserver>();

    public threshold?: IntersectionObserverInit['threshold'];

    constructor(
        private readonly callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
    ) {
        MockIntersectionObserver.instances.add(this);
        this.threshold = options?.threshold;
    }

    public root = document;
    public rootMargin = '';
    public thresholds = [];

    public observe = jest.fn();
    public unobserve = jest.fn();
    public disconnect = jest.fn();
    public takeRecords = jest.fn();

    public trigger(entries: MockIntersectionObserverEntry[]): void {
        // biome-ignore lint/suspicious/noExplicitAny: Partial implementation for mock.
        this.callback(entries as any, this);
    }
}

const initialValue = global.IntersectionObserver;

beforeAll(() => {
    global.IntersectionObserver = MockIntersectionObserver;
});

beforeEach(() => {
    MockIntersectionObserver.instances.clear();
});

afterAll(() => {
    global.IntersectionObserver = initialValue;
});

test('Successfully triggered when element intersects', () => {
    const callback = jest.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected(0.5, element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.threshold).toBe(0.5);

    const intersectionRatio = Symbol();
    const isIntersecting = Symbol();

    instance.trigger([
        {
            intersectionRatio,
            isIntersecting,
        },
    ]);

    expect(callback).toHaveBeenCalledWith({
        element,
        intersectionRatio,
        isIntersecting,
    });
});

test('Successfully triggered when element completely intersects', () => {
    const callback = jest.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected('completely', element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.threshold).toBe(1);

    const intersectionRatio = Symbol();
    const isIntersecting = Symbol();

    instance.trigger([
        {
            intersectionRatio,
            isIntersecting,
        },
    ]);

    expect(callback).toHaveBeenCalledWith({
        element,
        intersectionRatio,
        isIntersecting,
    });
});

test('Successfully triggered when element partially intersects', () => {
    const callback = jest.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected('partially', element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.threshold).toBe(0);

    const intersectionRatio = Symbol();
    const isIntersecting = Symbol();

    instance.trigger([
        {
            intersectionRatio,
            isIntersecting,
        },
    ]);

    expect(callback).toHaveBeenCalledWith({
        element,
        intersectionRatio,
        isIntersecting,
    });
});

test('Successfully disconnects if provided signal is aborted', () => {
    const callback = jest.fn();
    const element = document.createElement('div');
    const controller = new AbortController();

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected(0.5, element, callback, {
        signal: controller.signal,
    });

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

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

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected(0.5, element, callback, {
        signal: controller.signal,
    });

    expect(MockIntersectionObserver.instances.size).toBe(0);
});
