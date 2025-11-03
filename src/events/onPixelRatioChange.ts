/**
 * Create a listener that will fire a callback whenever the
 * pixel ratio of the current window changes.
 *
 * @param callback - The function called when the pixel ratio changes.
 * @param options - Optional arguments (TODO).
 */
function onPixelRatioChange(
    callback: (pixelRatio: number) => void,
    options?: { fireImmediately: boolean; signal?: AbortSignal },
): void {
    const { fireImmediately, signal } = { fireImmediately: false, ...options };

    if (signal?.aborted) {
        return;
    }

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

    if (fireImmediately) {
        handler();
    }

    register();
}

export { onPixelRatioChange };
