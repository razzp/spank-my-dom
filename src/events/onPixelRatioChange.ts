/**
 * An optional configuration object for `onPixelRatioChange`.
 *
 * @public
 */
type OnPixelRatioChangeOptions = {
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
 * @public
 */
function onPixelRatioChange(
    callback: (pixelRatio: number) => void,
    options?: OnPixelRatioChangeOptions,
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

export { onPixelRatioChange, type OnPixelRatioChangeOptions };
