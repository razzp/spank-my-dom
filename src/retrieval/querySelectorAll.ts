import { arrayFrom } from '../array/arrayFrom';

import type { Queryable } from './aliases/Queryable';

function querySelectorAll<T extends Element>(
    selectors: string,
    context: Queryable = document
): T[] {
    return arrayFrom(context.querySelectorAll<T>(selectors));
}

export { querySelectorAll };
