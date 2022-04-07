/**
 * Creates an array from an iterable object.
 *
 * @param iterable An iterable object to convert to an array.
 */
function arrayFrom<T>(iterable: Iterable<T> | ArrayLike<T>): T[] {
    return Array.from(iterable);
}

export { arrayFrom };
