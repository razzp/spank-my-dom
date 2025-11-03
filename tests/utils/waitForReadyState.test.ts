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
        const callback = jest.fn();

        expect.assertions(2);

        setReadyState('interactive');

        expect(document.readyState).toBe('interactive');

        try {
            await Promise.all([
                waitForReadyState('interactive').then(callback),
                waitForReadyState('loading').then(callback),
            ]);

            expect(callback).toHaveBeenCalledTimes(2);
        } catch {}
    });

    test('State is not reached, so attach a listener and wait', async () => {
        const callback = jest.fn();

        expect.assertions(3);

        expect(document.readyState).toBe('loading');

        try {
            const result = waitForReadyState('interactive').then(callback);

            setReadyState('interactive');

            await result;

            expect(callback).toHaveBeenCalledTimes(1);
            expect(document.readyState).toBe('interactive');
        } catch {}
    });
});

describe('Wait for state "complete"', () => {
    test('State is reached or exceeded, so resolve immediately', async () => {
        const callback = jest.fn();

        expect.assertions(2);

        setReadyState('complete');

        expect(document.readyState).toBe('complete');

        try {
            await Promise.all([
                waitForReadyState('complete').then(callback),
                waitForReadyState('interactive').then(callback),
                waitForReadyState('loading').then(callback),
            ]);

            expect(callback).toHaveBeenCalledTimes(3);
        } catch {}
    });

    test('State is not reached, so attach a listener and wait', async () => {
        const callback = jest.fn();

        expect.assertions(3);

        expect(document.readyState).toBe('loading');

        try {
            const result = waitForReadyState('complete').then(callback);

            setReadyState('complete');

            await result;

            expect(callback).toHaveBeenCalledTimes(1);
            expect(document.readyState).toBe('complete');
        } catch {}
    });
});
