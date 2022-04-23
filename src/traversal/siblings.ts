import { siblingsAfter } from './siblingsAfter';
import { siblingsBefore } from './siblingsBefore';

/**
 * Get the siblings of an element, optionally filtered by a selector.
 * @since 0.2.0
 *
 * @param {Element} element The element whose siblings will be returned.
 * @param {string} [selector] Optional selector to match siblings against.
 *
 * @returns {T[]}
 */
function siblings<T extends Element>(element: Element, selector?: string): T[] {
    return [
        ...siblingsBefore<T>(element, selector),
        ...siblingsAfter<T>(element, selector),
    ];
}

export { siblings };
