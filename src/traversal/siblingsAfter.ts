import { siblingAccumulator } from './internal/siblingAccumulator';

/**
 * Get the following siblings of an element, optionally filtered by a selector.
 * @since 0.2.0
 *
 * @param {Element} element The element whose siblings will be returned.
 * @param {string} [selector] Optional selector to match siblings against.
 *
 * @returns {Element[]}
 */
function siblingsAfter<T extends Element>(
    element: Element,
    selector?: string
): T[] {
    return siblingAccumulator('nextElementSibling', element, selector);
}

export { siblingsAfter };
