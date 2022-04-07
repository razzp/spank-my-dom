import { arrayFrom } from '../array/arrayFrom';

import type { Queryable } from './aliases/Queryable';

/**
 * Returns all descendant elements within context that match the given selectors.
 *
 * @param selectors The selectors to match against.
 * @param context The element from which to search from.
 */
function querySelectorAll<T extends Element>(
    selectors: string,
    context: Queryable = document
): T[] {
    return arrayFrom(context.querySelectorAll<T>(selectors));
}

export { querySelectorAll };
