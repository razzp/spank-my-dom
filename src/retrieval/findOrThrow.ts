/**
 * Returns the first element within context that matches the
 * given selector(s), or throws if nothing is found.
 *
 * @param selectors - The selectors to match against.
 * @param context - The context from which to search from.
 *
 * @throws
 * If no match is found.
 *
 * @public
 */
function findOrThrow<T extends Element>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): T {
    const result = context.querySelector<T>(selectors);

    if (!result) {
        throw new Error(`No matches found for selector: ${selectors}`);
    }

    return result;
}

export { findOrThrow };
