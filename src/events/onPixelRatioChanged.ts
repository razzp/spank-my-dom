import { getDevicePixelRatio } from '../utils/getDevicePixelRatio';

/**
 * An optional configuration object for `onPixelRatioChanged`.
 *
 * @public
 */
interface OnPixelRatioChangedOptions {
    /**
     * An `AbortSignal` that can be used to cancel the listener.
     */
    signal?: AbortSignal;
    /**
     * The maximum value to return, even if the actual value is higher.
     */
    max?: number;
    /**
     * Round fractional values up or down.
     */
    round?: 'up' | 'down';
    /**
     * Fire the callback immediately.
     */
    fireImmediately?: boolean;
}

/**
 * Create a listener that will fire a callback whenever the
 * pixel ratio of the current window changes.
 *
 * @param callback - The function called when the pixel ratio changes.
 * @param options - An optional configuration object.
 *
 * @example
 * ```ts
 * onPixelRatioChanged((pixelRatio) => {
 *     console.log(pixelRatio);
 * });
 * ```
 *
 * @public
 */
function onPixelRatioChanged(
    callback: (pixelRatio: number) => void,
    options?: OnPixelRatioChangedOptions,
): void {
    const {
        max = Number.POSITIVE_INFINITY,
        round,
        signal,
        fireImmediately = false,
    } = { ...options };

    let previousValue = 0;

    if (signal?.aborted) return;

    const handler = () => {
        const dpr = getDevicePixelRatio({ max, round });

        if (dpr !== previousValue) {
            callback(dpr);
            previousValue = dpr;
        }
    };

    const register = () => {
        window
            .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
            .addEventListener(
                'change',
                () => {
                    handler();
                    register();
                },
                { once: true, ...(signal !== undefined && { signal }) },
            );
    };

    fireImmediately && handler();
    register();
}

export { onPixelRatioChanged, type OnPixelRatioChangedOptions };
