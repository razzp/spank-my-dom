/**
 * Returns the first element within context that matches the given selectors.
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
function find<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): null | HTMLElementTagNameMap[K];
function find<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): null | MathMLElementTagNameMap[K];
function find<K extends keyof SVGElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): null | SVGElementTagNameMap[K];
function find<T extends Element>(
    selectors: string,
    context?: Document | DocumentFragment | Element,
): null | T;
function find(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): null | Element {
    return context.querySelector(selectors);
}

export { find };
