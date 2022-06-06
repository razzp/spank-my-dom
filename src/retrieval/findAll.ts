import type { Queryable } from './aliases/Queryable';

/**
 * Returns all descendant elements within context that match the given selectors.
 * @since 1.0.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {Element[]}
 */
function findAll<T extends Element>(
    selectors: string,
    context: Queryable = document
): T[] {
    return [...context.querySelectorAll<T>(selectors)];
}

export { findAll };
