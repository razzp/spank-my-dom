/**
 * Returns the first element within context that matches the given selector(s).
 *
 * @param selectors - One or more selectors to match.
 * @param context - The context from which to search from.
 *
 * @public
 */
function find<T extends Element>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): null | T {
    return context.querySelector(selectors);
}

export { find };
