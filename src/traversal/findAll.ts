/**
 * Fins all descendant elements within a given context,
 * that also match the given selectors.
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
function findAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): HTMLElementTagNameMap[K][];
function findAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): MathMLElementTagNameMap[K][];
function findAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): SVGElementTagNameMap[K][];
function findAll<T extends Element>(
    selectors: string,
    context?: Document | DocumentFragment | Element,
): T[];
function findAll(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): Element[] {
    return [...context.querySelectorAll(selectors)];
}

export { findAll };
