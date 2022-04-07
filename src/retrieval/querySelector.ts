import type { NullOr } from '../aliases/NullOr';
import type { Queryable } from './aliases/Queryable';

/**
 * Returns the first element within context that matches the given selectors.
 * 
 * @param selectors The selectors to match against.
 * @param context The element from which to search from.
 */
function querySelector<T extends Element>(
    selectors: string,
    context: Queryable = document
): NullOr<T> {
    return context.querySelector(selectors);
}

export { querySelector };
