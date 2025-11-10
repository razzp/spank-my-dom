/**
 * @jest-environment jsdom
 */

import { onElementAdded } from '../../src/events/onElementAdded';

interface MockMutationRecord {
    readonly addedNodes: Node[];
}

class MockMutationObserver implements MutationObserver {
    static readonly instances = new Set<MockMutationObserver>();

    constructor(private readonly callback: MutationCallback) {
        MockMutationObserver.instances.add(this);
    }

    public observe = jest.fn();
    public disconnect = jest.fn();
    public takeRecords = jest.fn().mockReturnValue([]);

    public trigger(mutations: MockMutationRecord[]): void {
        // biome-ignore lint/suspicious/noExplicitAny: You can't mock `NodeList`.
        this.callback(mutations as any, this);
    }
}

const oldValue = global.MutationObserver;

beforeAll(() => {
    global.MutationObserver = MockMutationObserver;
});

beforeEach(() => {
    MockMutationObserver.instances.clear();
});

afterAll(() => {
    global.MutationObserver = oldValue;
});

test('Successfully triggered when new element with matching tag is observed', () => {
    const callback = jest.fn();
    const newElement = document.createElement('div');

    expect(MockMutationObserver.instances.size).toBe(0);

    onElementAdded('div', callback);

    expect(MockMutationObserver.instances.size).toBe(1);

    const instance = [...MockMutationObserver.instances][0];

    expect(instance.observe).toHaveBeenCalledTimes(1);

    instance.trigger([
        {
            addedNodes: [newElement],
        },
    ]);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBe(newElement);
});

test('Successfully matches selectors, and ignores incorrect tags', () => {
    const callback = jest.fn();
    const correctElement = document.createElement('div');
    const incorrectElement = document.createElement('button');

    correctElement.className = 'foo';
    incorrectElement.className = 'foo';

    expect(MockMutationObserver.instances.size).toBe(0);

    onElementAdded('div', callback, {
        selectors: '.foo',
    });

    const instance = [...MockMutationObserver.instances][0];

    expect(instance).toBeDefined();

    instance.trigger([
        {
            // Incorrect tag AND class.
            addedNodes: [document.createElement('div')],
        },
    ]);

    expect(callback).not.toHaveBeenCalled();

    instance.trigger([
        {
            // Incorrect tag ONLY.
            addedNodes: [incorrectElement],
        },
    ]);

    expect(callback).not.toHaveBeenCalled();

    instance.trigger([
        {
            // Correct tag AND class.
            addedNodes: [correctElement],
        },
    ]);

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBe(correctElement);
});

test('Successfully disconnects if provided signal is aborted', () => {
    const callback = jest.fn();
    const controller = new AbortController();

    expect(MockMutationObserver.instances.size).toBe(0);

    onElementAdded('div', callback, {
        signal: controller.signal,
    });

    const instance = [...MockMutationObserver.instances][0];

    expect(instance).toBeDefined();
    expect(instance.disconnect).not.toHaveBeenCalled();

    controller.abort();

    expect(instance.disconnect).toHaveBeenCalled();
});

test('Short circuits if signal is provided that has already been aborted', () => {
    const callback = jest.fn();
    const controller = new AbortController();

    controller.abort();

    expect(MockMutationObserver.instances.size).toBe(0);

    onElementAdded('div', callback, {
        signal: controller.signal,
    });

    expect(MockMutationObserver.instances.size).toBe(0);
});
