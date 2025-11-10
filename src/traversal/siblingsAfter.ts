import { getSiblings } from './internal/getSiblings';

/**
 * Get the siblings before an element, optionally filtered by selector(s).
 *
 * @param element - The element whose siblings will be returned.
 * @param selectors - One or more selectors to match.
 *
 * @example
 * Find all siblings that succeed `element` in its parent's child list.
 * ```ts
 * const elements = siblingsAfter(element);
 * ```
 *
 * @example
 * Find all siblings that succeed `element`, filtered by CSS selectors.
 * ```ts
 * const elements = siblingsAfter(element, '.foo');
 * ```
 *
 * @public
 */
function siblingsAfter<T extends Element>(
    element: Element,
    selectors?: string,
): T[] {
    return getSiblings('nextElementSibling', element, selectors);
}

export { siblingsAfter };
