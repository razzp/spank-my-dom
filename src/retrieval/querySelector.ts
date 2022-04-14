import type { NullOr } from '../aliases/NullOr';
import type { Queryable } from './aliases/Queryable';

/**
 * Returns the first element within context that matches the given selectors.
 * @category Retrieval
 * @since 0.1.0
 *
 * @param {string} selectors The selectors to match against.
 * @param {Document|DocumentFragment|Element} context The context from which to search from.
 *
 * @returns {null|Element}
 */
function querySelector<T extends Element>(
    selectors: string,
    context: Queryable = document
): NullOr<T> {
    return context.querySelector(selectors);
}

export { querySelector };
