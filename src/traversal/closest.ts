/**
 * Returns the first ancestor of `element` that matches
 * the selector(s), or, optionally, itself.
 *
 * @param element - The element from which to search.
 * @param selectors - One or more selectors to match.
 * @param skipSelf - Ignore `element` even if it matches.
 *
 * @public
 */
function closest<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf: boolean = false,
): null | T {
    return skipSelf
        ? (element.parentElement?.closest(selectors) ?? null)
        : element.closest(selectors);
}

export { closest };
