/**
 * Returns the first element within context that matches the given selectors.
 * @since 1.0.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {null|Element}
 */
function findSingle<T extends Element>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): null | T {
    return context.querySelector(selectors);
}

export { findSingle };
