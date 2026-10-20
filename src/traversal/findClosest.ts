/**
 * Traverse the DOM until an element is found that matches the selectors.
 *
 * @group Traversal
 *
 * @param element - The element from which to search.
 * @param selectors - One or more selectors to match.
 * @param skipSelf - Ignore `element` and begin the search on its parent.
 *
 * @example
 * Traverse the element and its parents until a match is found.
 * ```ts
 * const result = findClosest(element, '.foo');
 * ```
 *
 * @example
 * Traverse the element's parents only, until a match is found.
 * ```ts
 * const result = findClosest(element, '.foo', true);
 * ```
 */
function findClosest<K extends keyof HTMLElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): null | HTMLElementTagNameMap[K];
function findClosest<K extends keyof MathMLElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): null | MathMLElementTagNameMap[K];
function findClosest<K extends keyof SVGElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): null | SVGElementTagNameMap[K];
function findClosest<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf?: boolean,
): null | T;
function findClosest<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf: boolean = false,
): null | T {
    return skipSelf
        ? (element.parentElement?.closest(selectors) ?? null)
        : element.closest(selectors);
}

export { findClosest };
