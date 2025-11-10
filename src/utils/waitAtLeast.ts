/**
 * Given a `Promise`, wait a minimum period of time before resolving.
 *
 * @remarks
 * Useful for delaying near instantaneous actions that might affect UI.
 *
 * @param minimumWaitMs - The minimum wait time in milliseconds.
 * @param promise - The `Promise` to wait for.
 *
 * @example
 * ```ts
 * const result = await waitAtLeast(2000, promise);
 * ```
 *
 * @public
 */
function waitAtLeast<T>(
    minimumWaitMs: number,
    promise: Promise<T> | PromiseLike<T>,
): Promise<T> {
    return new Promise((resolve, reject) => {
        Promise.all([
            promise,
            new Promise((resolve) => window.setTimeout(resolve, minimumWaitMs)),
        ])
            .then(([awaited]) => resolve(awaited))
            .catch(reject);
    });
}

export { waitAtLeast };
