import { timed } from '../../src/utils/timed';

jest.useFakeTimers();

test('Successfully returns value and time from asynchronous function', async () => {
    const returnValue = Symbol();

    expect.assertions(1);

    try {
        const result = await timed(async () => {
            jest.advanceTimersByTime(1000);
            return returnValue;
        });

        expect(result).toEqual({
            value: returnValue,
            time: 1000,
        });
    } catch {}
});

test('Successfully returns value and time from synchronous function', async () => {
    const returnValue = Symbol();

    expect.assertions(1);

    try {
        const result = await timed(() => {
            jest.advanceTimersByTime(1000);
            return returnValue;
        });

        expect(result).toEqual({
            value: returnValue,
            time: 1000,
        });
    } catch {}
});

test('Successfully returns elapsed time during function', async () => {
    expect.assertions(1);

    try {
        await timed(async (getTime) => {
            jest.advanceTimersByTime(500);
            expect(getTime()).toBe(500);
        });
    } catch {}
});
