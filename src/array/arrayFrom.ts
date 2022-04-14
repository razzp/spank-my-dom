/**
 * Creates an array from an iterable object.
 * @category Array
 * @since 0.1.0
 *
 * @param {(Iterable<T>|ArrayLike<T>)} iterable The iterable object to convert to an array.
 *
 * @returns {T[]}
 */
function arrayFrom<T>(iterable: Iterable<T> | ArrayLike<T>): T[] {
    return Array.from(iterable);
}

export { arrayFrom };
