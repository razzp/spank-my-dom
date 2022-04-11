import { sanitiseOptions } from '../../../../src/events/delegate/internal/sanitiseOptions';

test('Given `undefined` or `false`, returns an object with `capture` set to `false`', () => {
    expect(sanitiseOptions(undefined)).toEqual({
        capture: false,
    });

    expect(sanitiseOptions(false)).toEqual({
        capture: false,
    });
});

test('Given `true`, returns an object with `capture` set to `true`', () => {
    expect(sanitiseOptions(true)).toEqual({
        capture: true,
    });
});

test('Given an object, returns a sanitised object with correct props', () => {
    const abortController = new AbortController();

    expect(
        sanitiseOptions({
            capture: true,
            once: true,
            passive: true,
            signal: abortController.signal,
        })
    ).toEqual({
        capture: true,
        passive: true,
        origOnce: true,
        origSignal: abortController.signal,
    });
});
