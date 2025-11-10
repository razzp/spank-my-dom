/**
 * Traverse the element (unless skipped) and its parents until
 * an element is found that matches the selector(s).
 *
 * @param element - The element from which to search.
 * @param selectors - One or more selectors to match.
 * @param skipSelf - Ignore `element` and begin the search on its parent.
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
