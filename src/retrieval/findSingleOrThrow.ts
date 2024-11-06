/**
 * Returns the first element within context that matches the given selectors.
 * @since 1.0.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {Element}
 */
function findSingleOrThrow<T extends Element>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): T {
    const result = context.querySelector<T>(selectors);

    if (!result) {
        throw new Error(`No matches found for selector: ${selectors}`);
    }

    return result;
}

export { findSingleOrThrow };
