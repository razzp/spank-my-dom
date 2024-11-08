function throttle<T extends EventTarget, U extends unknown[]>(
    func: (this: T, ...args: U) => unknown,
    delay: number,
    options?: {
        signal?: AbortSignal;
        trailing?: boolean;
    },
) {
    const { signal, trailing } = { trailing: false, ...options };

    let blocked = false;

    let timeout: number;
    let lastArgs: U;

    signal?.addEventListener('abort', () => window.clearTimeout(timeout));

    return function (this: T, ...args: U) {
        lastArgs = args;

        if (!blocked) {
            blocked = true;

            if (!trailing) {
                func.apply(this, lastArgs);
            }

            timeout = window.setTimeout(() => {
                // Ensure that, if an `AbortSignal` was supplied, it hasn't been
                // aborted during the timeout delay.
                if (trailing && (!signal || (signal && !signal.aborted))) {
                    func.apply(this, lastArgs);
                }
            }, delay);
        }
    };
}

export { throttle };

// TODO: JSDOC
