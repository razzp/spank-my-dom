/**
 * Returns the first element within context that matches the given selector(s).
 *
 * @remarks
 * Unlike using `querySelector()`, the default inferred element type is
 * `HTMLElement`, rather than `Element`. More often than not this is the
 * preferred behaviour, so it saves having to explicitly type it.
 *
 * @param selectors - One or more selectors to match.
 * @param context - The context from which to search from.
 *
 * @public
 */
function find<T extends Element = HTMLElement>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): null | T {
    return context.querySelector(selectors);
}

export { find };
