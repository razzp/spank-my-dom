/**
 * Fins all descendant elements within a given context,
 * that also match the given selector(s).
 *
 * @remarks
 * Unlike using `querySelectorAll()`, the default inferred element type is
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
 * Find elements using the entire document as context (default).
 * ```ts
 * const elements = findAll('.foo');
 * ```
 *
 * @example
 * Find elements using another element as context.
 * ```ts
 * const elements = findAll('.foo', contextElement);
 * ```
 *
 * @example
 * Infer the type of elements using TypeScript.
 * ```ts
 * const elements = findAll<HTMLButtonElement>('.foo');
 * ```
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
