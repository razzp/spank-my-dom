import { siblingAccumulator } from './internal/siblingAccumulator';

/**
 * Get the preceding siblings of an element, optionally filtered by a selector.
 * @since 0.2.0
 *
 * @param {Element} element The element whose siblings will be returned.
 * @param {string} [selector] Optional selector to match siblings against.
 *
 * @returns {T[]}
 */
function siblingsBefore<T extends Element>(
    element: Element,
    selector?: string
): T[] {
    return siblingAccumulator('previousElementSibling', element, selector);
}

export { siblingsBefore };
