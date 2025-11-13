/**
 * Traverse the element (unless skipped) and its parents until
 * an element is found that matches the selectors.
 *
 * @param element - The element from which to search.
 * @param selectors - One or more selectors to match.
 * @param skipSelf - Ignore `element` and begin the search on its parent.
 *
 * @example
 * Traverse the element and its parents until a match is found.
 * ```ts
 * const element = closest('.foo');
 * ```
 *
 * @example
 * Traverse the element's parents only, until a match is found.
 * ```ts
 * const element = closest('.foo', true);
 * ```
 *
 * @public
 */
function getClosest<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf: boolean = false,
): null | T {
    return skipSelf
        ? (element.parentElement?.closest(selectors) ?? null)
        : element.closest(selectors);
}

export { getClosest };
