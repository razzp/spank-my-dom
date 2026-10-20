import { findClosest } from './findClosest';

/**
 * Traverse the DOM until an element is found that matches the selectors,
 * or throws if nothing is found.
 *
 * @group Traversal
 *
 * @param element - The element from which to search.
 * @param selectors - One or more selectors to match.
 * @param skipSelf - Ignore `element` and begin the search on its parent.
 *
 * @throws
 * Error - If no match is found.
 *
 * @example
 * Traverse the element and its parents until a match is found.
 * ```ts
 * const result = findClosestOrThrow(element, '.foo');
 * ```
 *
 * @example
 * Traverse the element's parents only, until a match is found.
 * ```ts
 * const result = findClosestOrThrow(element, '.foo', true);
 * ```
 */
function findClosestOrThrow<K extends keyof HTMLElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): HTMLElementTagNameMap[K];
function findClosestOrThrow<K extends keyof MathMLElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): MathMLElementTagNameMap[K];
function findClosestOrThrow<K extends keyof SVGElementTagNameMap>(
    element: Element,
    selectors: K,
    skipSelf?: boolean,
): SVGElementTagNameMap[K];
function findClosestOrThrow<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf?: boolean,
): T;
function findClosestOrThrow<T extends Element>(
    element: Element,
    selectors: string,
    skipSelf: boolean = false,
): T {
    const result = findClosest<T>(element, selectors, skipSelf);

    if (!result) {
        throw new Error(`No matches found for selectors: ${selectors}`);
    }

    return result;
}

export { findClosestOrThrow };
