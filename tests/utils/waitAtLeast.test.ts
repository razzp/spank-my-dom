import { waitAtLeast } from '../../src/utils/waitAtLeast';

jest.useFakeTimers();

test('Given a promise that resolves, waits minimum time before resolving', async () => {
    const returnValue = Symbol();
    const callback = jest.fn();

    expect.assertions(2);

    try {
        waitAtLeast(1000, Promise.resolve(returnValue)).then(callback);

        await jest.advanceTimersByTimeAsync(999);

        expect(callback).not.toHaveBeenCalled();

        await jest.advanceTimersByTimeAsync(1);

        expect(callback).toHaveBeenCalledWith(returnValue);
    } catch {}
});

test('Given a promise that rejects, is caught', async () => {
    const returnValue = Symbol();
    const callback = jest.fn();

    expect.assertions(1);

    try {
        waitAtLeast(1000, Promise.reject(returnValue)).catch(callback);

        await jest.runAllTimersAsync();

        expect(callback).toHaveBeenCalledWith(returnValue);
    } catch {}
});
