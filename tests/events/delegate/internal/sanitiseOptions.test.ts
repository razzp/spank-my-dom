import { sanitiseOptions } from '../../../../src/events/delegate/internal/sanitiseOptions';

describe('Sanitise options passed in an event listener', () => {
    test('Value of `undefined` returns object with correct props', () => {
        expect(sanitiseOptions(undefined)).toEqual({
            capture: false,
        });
    });

    test('Value of `false` returns object with correct props', () => {
        expect(sanitiseOptions(false)).toEqual({
            capture: false,
        });
    });

    test('Value of `true` returns object with correct props', () => {
        expect(sanitiseOptions(true)).toEqual({
            capture: true,
        });
    });

    test('Value of type `object` returns object with correct props', () => {
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
});
