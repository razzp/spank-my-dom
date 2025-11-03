/**
 * Fins all descendant elements within a given context,
 * that also match the given selector(s).
 *
 * @param selectors - One or more selectors to match.
 * @param context - The context from which to search from.
 *
 * @public
 */
function findAll<T extends Element>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): T[] {
    return [...context.querySelectorAll<T>(selectors)];
}

export { findAll };
