/**
 * Given a `Promise`, wait a minimum period of time before resolving.
 *
 * @remarks
 * Useful for delaying near instantaneous actions that might affect UI.
 *
 * @param delay - The minimum wait time in milliseconds.
 * @param promise - The `Promise` to wait for.
 *
 * @example
 * Wait at least 1000ms for a single promise.
 * ```ts
 * const result = await waitAtLeast(1000, Promise.resolve('foo));
 * ```
 *
 * @example
 * Wait at least 1000ms for multiple promises using `Promise.all()`.
 * ```ts
 * const [result1, result2] = await waitAtLeast(
 *     1000,
 *     Promise.all([Promise.resolve('foo'), Promise.resolve('bar')]),
 * );
 * ```
 *
 * @public
 */
function waitAtLeast<T>(
    delay: number,
    promise: Promise<T> | PromiseLike<T>,
): Promise<T> {
    return new Promise((resolve, reject) => {
        Promise.all([
            promise,
            new Promise((resolve) => globalThis.setTimeout(resolve, delay)),
        ])
            .then(([awaited]) => resolve(awaited))
            .catch(reject);
    });
}

export { waitAtLeast };
