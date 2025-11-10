/**
 * Fins all descendant elements within a given context,
 * that also match the given selector(s).
 *
 * @remarks
 * Unlike using `querySelectorAll()`, the default inferred element type is
 * `HTMLElement`, rather than `Element`. More often than not this is the
 * preferred behaviour, so it saves having to explicitly type it.
 *
 * @param selectors - One or more selectors to match.
 * @param context - The context from which to search from.
 *
 * @public
 */
function findAll<T extends Element = HTMLElement>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): T[] {
    return [...context.querySelectorAll<T>(selectors)];
}

export { findAll };
