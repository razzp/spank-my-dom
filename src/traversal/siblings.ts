import { siblingsAfter } from './siblingsAfter';
import { siblingsBefore } from './siblingsBefore';

/**
 * Get the siblings of an element, optionally filtered by selector(s).
 *
 * @param element - The element whose siblings will be returned.
 * @param selectors - One or more selectors to match.
 *
 * @public
 */
function siblings<T extends Element>(
    element: Element,
    selectors?: string,
): T[] {
    return [
        ...siblingsBefore<T>(element, selectors),
        ...siblingsAfter<T>(element, selectors),
    ];
}

export { siblings };
