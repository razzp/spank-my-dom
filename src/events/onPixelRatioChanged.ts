/**
 * An optional configuration object for `onPixelRatioChanged`.
 *
 * @public
 */
type OnPixelRatioChangedOptions = {
    /**
     * An `AbortSignal` that can be used to cancel the listener.
     */
    signal?: AbortSignal;
};

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
    const { signal } = { ...options };

    if (signal?.aborted) return;

    const handler = () => callback(window.devicePixelRatio);

    const register = () => {
        window
            .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
            .addEventListener(
                'change',
                () => {
                    handler();
                    register();
                },
                { once: true, signal },
            );
    };

    register();
}

export { onPixelRatioChanged, type OnPixelRatioChangedOptions };
