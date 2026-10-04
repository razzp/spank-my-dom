// @vitest-environment jsdom

import { afterAll, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import { onElementIntersected } from '../../src/events/onElementIntersected';

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
    public scrollMargin = '';
    public thresholds = [];

    public observe = vi.fn();
    public unobserve = vi.fn();
    public disconnect = vi.fn();
    public takeRecords = vi.fn();

    public trigger(entries: symbol[]): void {
        // biome-ignore lint/suspicious/noExplicitAny: Partial implementation for mock.
        this.callback(entries as any, this);
    }
}

beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
});

beforeEach(() => {
    MockIntersectionObserver.instances.clear();
});

afterAll(() => {
    vi.unstubAllGlobals();
});

test('Successfully triggered when element intersects', () => {
    const callback = vi.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected(0.5, element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.observe.mock.calls[0][0]).toBe(element);
    expect(instance.threshold).toBe(0.5);

    const mockEntry = Symbol();

    instance.trigger([mockEntry]);

    expect(callback).toHaveBeenCalledWith({
        element,
        entry: mockEntry,
    });
});

test('Successfully triggered when element completely intersects', () => {
    const callback = vi.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected('completely', element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.observe.mock.calls[0][0]).toBe(element);
    expect(instance.threshold).toBe(1);

    const mockEntry = Symbol();

    instance.trigger([mockEntry]);

    expect(callback).toHaveBeenCalledWith({
        element,
        entry: mockEntry,
    });
});

test('Successfully triggered when element partially intersects', () => {
    const callback = vi.fn();
    const element = document.createElement('div');

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected('partially', element, callback);

    expect(MockIntersectionObserver.instances.size).toBe(1);

    const instance = [...MockIntersectionObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.observe).toHaveBeenCalled();
    expect(instance.observe.mock.calls[0][0]).toBe(element);
    expect(instance.threshold).toBe(0);

    const mockEntry = Symbol();

    instance.trigger([mockEntry]);

    expect(callback).toHaveBeenCalledWith({
        element,
        entry: mockEntry,
    });
});

test('Successfully disconnects if provided signal is aborted', () => {
    const callback = vi.fn();
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
    const callback = vi.fn();
    const element = document.createElement('div');
    const controller = new AbortController();

    controller.abort();

    expect(MockIntersectionObserver.instances.size).toBe(0);

    onElementIntersected(0.5, element, callback, {
        signal: controller.signal,
    });

    expect(MockIntersectionObserver.instances.size).toBe(0);
});
