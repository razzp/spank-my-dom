/**
 * Returns the first element within context that matches the
 * given selectors, or throws if nothing is found.
 *
 * For runtime safety, consider using an assertion library such as
 * {@link https://github.com/razzp/bossy-boots | Bossy Boots}.
 *
 * @param selectors - The selectors to match against.
 * @param context - The context from which to search from.
 *
 * @throws
 * Error - If no match is found.
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
 * Infer the type of element using TypeScript.
 * ```ts
 * const element = find<HTMLButtonElement>('.foo');
 * ```
 *
 * @public
 */
function findOrThrow<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): HTMLElementTagNameMap[K];
function findOrThrow<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): MathMLElementTagNameMap[K];
function findOrThrow<K extends keyof SVGElementTagNameMap>(
    selectors: K,
    context?: Document | DocumentFragment | Element,
): SVGElementTagNameMap[K];
function findOrThrow<T extends Element>(
    selectors: string,
    context?: Document | DocumentFragment | Element,
): T;
function findOrThrow(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): Element {
    const result = context.querySelector(selectors);

    if (!result) {
        throw new Error(`No matches found for selectors: ${selectors}`);
    }

    return result;
}

export { findOrThrow };
