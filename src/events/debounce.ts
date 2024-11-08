function debounce<T extends EventTarget, U extends unknown[]>(
    func: (this: T, ...args: U) => unknown,
    delay: number,
    options?: {
        signal?: AbortSignal;
    },
) {
    const { signal } = { ...options };

    let timeout: number;

    signal?.addEventListener('abort', () => window.clearTimeout(timeout));

    return function (this: T, ...args: U) {
        window.clearTimeout(timeout);

        timeout = window.setTimeout(() => {
            // Ensure that, if an `AbortSignal` was supplied, it hasn't been
            // aborted during the timeout delay.
            if (!signal || (signal && !signal.aborted)) {
                func.apply(this, args);
            }
        }, delay);
    };
}

export { debounce };

// TODO: JSDOC
