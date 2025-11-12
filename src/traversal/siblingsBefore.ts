import { getSiblings } from './internal/getSiblings';

/**
 * Get the siblings after an element, optionally filtered by selector(s).
 *
 * @param element - The element whose siblings will be returned.
 * @param selectors - One or more selectors to match.
 *
 * @example
 * Find all siblings that precede `element` in its parent's child list.
 * ```ts
 * const elements = siblingsBefore(element);
 * ```
 *
 * @example
 * Find all siblings that precede `element`, filtered by CSS selectors.
 * ```ts
 * const elements = siblingsBefore(element, '.foo');
 * ```
 *
 * @public
 */
function siblingsBefore<T extends Element>(
    element: Element,
    selectors?: string,
): T[] {
    return getSiblings<T>(
        'previousElementSibling',
        element,
        selectors,
    ).reverse();
}

export { siblingsBefore };
