import type { Queryable } from './aliases/Queryable';

/**
 * Returns the first element within context that matches the given selectors.
 * @since 1.0.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {Element}
 */
function findOrThrow<T extends Element>(
    selectors: string,
    context: Queryable = document
): T {
    const result = context.querySelector<T>(selectors);

    if (!result) {
        throw new Error(`No matches found for selector: ${selectors}`);
    }

    return result;
}

export { findOrThrow };
