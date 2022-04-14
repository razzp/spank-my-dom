import { arrayFrom } from '../array/arrayFrom';

import type { Queryable } from './aliases/Queryable';

/**
 * Returns all descendant elements within context that match the given selectors.
 * @category Retrieval
 * @since 0.1.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {Element[]}
 */
function querySelectorAll<T extends Element>(
    selectors: string,
    context: Queryable = document
): T[] {
    return arrayFrom(context.querySelectorAll<T>(selectors));
}

export { querySelectorAll };
