/**
 * Create an array of N size and fill it with either a static value,
 * or the result of a predicate function.
 *
 * @param size - The size of the array.
 * @param value - The value to fill the array with.
 *
 * @example
 * Create an array of duplicate values.
 * ```ts
 * const array = arrayOf(5, 'foo');
 * // Result: ['foo', 'foo', 'foo', 'foo', 'foo']
 * ```
 *
 * @example
 * Create an array using a predicate function.
 * ```ts
 * const array = arrayOf(5, (index) => index));
 * // Result: [0, 1, 2, 3, 4]
 * ```
 *
 * @example
 * Create an array using of Class instances.
 * ```ts
 * const array = arrayOf(5, () => new Foo()));
 * // Result: [Foo, Foo, Foo, Foo, Foo]
 * ```
 *
 * @public
 */
function arrayOf<T extends (index: number) => unknown>(
    size: number,
    value: T,
): ReturnType<T>[];
function arrayOf<T>(size: number, value: T): T[];
function arrayOf(size: number, value: unknown): unknown[] {
    const array = [];

    for (let i = 0; i < size; i++) {
        array.push(typeof value === 'function' ? value(i) : value);
    }

    return array;
}

export { arrayOf };
