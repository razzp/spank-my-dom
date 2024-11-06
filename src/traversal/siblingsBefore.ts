import { getSiblings } from './internal/getSiblings';

/**
 * Get the preceding siblings of an element, optionally filtered by a selector.
 * @since 0.2.0
 *
 * @param {Element} element The element whose siblings will be returned.
 * @param {string} [selector] Optional selector to match siblings against.
 *
 * @returns {Element[]}
 */
function siblingsBefore<T extends Element>(
    element: Element,
    selector?: string,
): T[] {
    return getSiblings<T>(
        'previousElementSibling',
        element,
        selector,
    ).reverse();
}

export { siblingsBefore };
