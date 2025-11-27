/**
 * The result returned from `timed`.
 *
 * @public
 */
interface TimedResult<T> {
    /**
     * The original value returned from the function.
     */
    value: T;
    /**
     * The time the function took to run in milliseconds.
     */
    time: number;
}

/**
 * Wrap a function in a timer that will let you know how long it took to run.
 * This works for both asynchronous and long-running synchronous operations.
 *
 * @param func - The function to time. Provides method `getTime()` to return
 * the elapsed time at any point during execution.
 *
 * @example
 * Time a function.
 * ```ts
 * const { time, value } = await timed(async () => {
 *     await operation1(); // Takes 500ms
 *     await operation2(); // Takes 500ms
 *
 *     return 'foo';
 * });
 *
 * console.log(time); // 1000
 * console.log(value); // 'foo'
 * ```
 *
 * @example
 * Time a function, and use the `getTime()` method to return the
 * elapsed time at some point during the function execution.
 * ```ts
 * const { time, value } = await timed(async (getTime) => {
 *     await operation1(); // Takes 500ms
 *     console.log(getTime()); // 500
 *     await operation2(); // Takes 500ms
 * });
 *
 * console.log(time); // 1000
 * ```
 *
 * @public
 */
async function timed<T>(
    func: (getTime: () => number) => T,
): Promise<TimedResult<Awaited<T>>> {
    const start = performance.now();
    const getTime = () => Math.round(performance.now() - start);

    return {
        value: await func(getTime),
        time: getTime(),
    };
}

export { timed, type TimedResult };
