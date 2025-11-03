/**
 * @jest-environment jsdom
 */

import { waitForReadyState } from '../../src/utils/waitForReadyState';

function setReadyState(state: DocumentReadyState): void {
    Object.defineProperty(document, 'readyState', {
        get() {
            return state;
        },
        configurable: true,
    });

    document.dispatchEvent(new Event('readystatechange'));
}

beforeEach(() => {
    setReadyState('loading');
});

describe('Wait for state "loading"', () => {
    test('State is matched or exceeded, so resolve immediately', async () => {
        expect.assertions(2);

        expect(document.readyState).toBe('loading');

        try {
            const loadingResult = await waitForReadyState('loading');

            expect(typeof loadingResult).toBe('number');
        } catch {}
    });
});

describe('Wait for state "interactive"', () => {
    test('State is reached or exceeded, so resolve immediately', async () => {
        expect.assertions(3);

        setReadyState('interactive');

        expect(document.readyState).toBe('interactive');

        try {
            const interactiveResult = await waitForReadyState('interactive');
            const loadingResult = await waitForReadyState('loading');

            expect(typeof interactiveResult).toBe('number');
            expect(typeof loadingResult).toBe('number');
        } catch {}
    });

    test('State is not reached, so attach a listener and wait', async () => {
        expect.assertions(3);

        expect(document.readyState).toBe('loading');

        try {
            const result = waitForReadyState('interactive');

            setReadyState('interactive');

            expect(typeof (await result)).toBe('number');
            expect(document.readyState).toBe('interactive');
        } catch {}
    });
});

describe('Wait for state "complete"', () => {
    test('State is reached or exceeded, so resolve immediately', async () => {
        expect.assertions(4);

        setReadyState('complete');

        expect(document.readyState).toBe('complete');

        try {
            const completeResult = await waitForReadyState('complete');
            const interactiveResult = await waitForReadyState('interactive');
            const loadingResult = await waitForReadyState('loading');

            expect(typeof completeResult).toBe('number');
            expect(typeof interactiveResult).toBe('number');
            expect(typeof loadingResult).toBe('number');
        } catch {}
    });

    test('State is not reached, so attach a listener and wait', async () => {
        expect.assertions(3);

        expect(document.readyState).toBe('loading');

        try {
            const result = waitForReadyState('complete');

            setReadyState('complete');

            expect(typeof (await result)).toBe('number');
            expect(document.readyState).toBe('complete');
        } catch {}
    });
});
