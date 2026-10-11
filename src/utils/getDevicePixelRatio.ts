/**
 * An optional configuration object for `getDevicePixelRatio`.
 *
 * @public
 */
interface GetDevicePixelRatioOptions {
    /**
     * The maximum value to return, even if the actual value is higher.
     */
    max?: number;
    /**
     * Round fractional values up or down.
     */
    round?: 'up' | 'down';
}

/**
 * Get the pixel ratio of the current device.
 *
 * @param options - An optional configuration object.
 *
 * @example
 * ```ts
 * const dpr = getDevicePixelRatio();
 * ```
 *
 * @example
 * Manipulate the returned value.
 * ```ts
 * const dpr = getDevicePixelRatio({
 *     max: 2,
 *     round: 'up',
 * });
 * ```
 *
 * @public
 */
function getDevicePixelRatio(options?: GetDevicePixelRatioOptions): number {
    const { max = Number.POSITIVE_INFINITY, round } = { ...options };
    const dpr = Math.min(window.devicePixelRatio, max);

    switch (round) {
        case 'up':
            return Math.ceil(dpr);
        case 'down':
            return Math.floor(dpr);
        default:
            return dpr;
    }
}

export { getDevicePixelRatio, type GetDevicePixelRatioOptions };
