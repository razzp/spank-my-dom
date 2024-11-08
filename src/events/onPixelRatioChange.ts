function onPixelRatioChange(
    callback: (pixelRatio: number) => void,
    options?: { fireImmediately: boolean; signal?: AbortSignal },
): void {
    const { fireImmediately, signal } = { fireImmediately: false, ...options };
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

// TODO: JSDOC
