/**
 * Creates an array from an iterable object.
 * @since 0.3.0
 *
 * @param {(Iterable<T>|ArrayLike<T>)} iterable The iterable object to convert to an array.
 *
 * @returns {T[]}
 */
function toArray<T>(iterable: Iterable<T> | ArrayLike<T>): T[] {
    return Array.from(iterable);
}

export { toArray };
