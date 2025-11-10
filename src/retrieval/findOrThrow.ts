/**
 * Returns the first element within context that matches the
 * given selector(s), or throws if nothing is found.
 *
 * @remarks
 * Unlike using `querySelector()`, the default inferred element type is
 * `HTMLElement`, rather than `Element`. More often than not this is the
 * preferred behaviour, so it saves having to explicitly type it.
 *
 * @param selectors - The selectors to match against.
 * @param context - The context from which to search from.
 *
 * @throws
 * If no match is found.
 *
 * @public
 */
function findOrThrow<T extends Element = HTMLElement>(
    selectors: string,
    context: Document | DocumentFragment | Element = document,
): T {
    const result = context.querySelector<T>(selectors);

    if (!result) {
        throw new Error(`No matches found for selector: ${selectors}`);
    }

    return result;
}

export { findOrThrow };
