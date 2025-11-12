/**
 * Returns the first element within context that matches the given selector(s).
 *
 * @remarks
 * Unlike using `querySelector()`, the default inferred element type is
 * `HTMLElement`, rather than `Element`. More often than not this is the
 * preferred behaviour, so it saves having to explicitly type it.
 *
 * For runtime safety, consider using an assertion library such as
 * {@link https://github.com/razzp/bossy-boots | Bossy Boots}.
 *
 * @param selectors - One or more selectors to match.
 * @param context - The context from which to search from.
 *
 * @example
 * Find an element using the entire document as context (default).
 * ```ts
 * const element = find('.foo');
 * ```
 *
 * @example
 * Find an element using another element as context.
 * ```ts
 * const element = find('.foo', contextElement);
 * ```
 *
 * @example
 * Infer the type of element using the generic `find<T>`.
 * ```ts
 * const element = find<HTMLButtonElement>('.foo');
 * ```
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
