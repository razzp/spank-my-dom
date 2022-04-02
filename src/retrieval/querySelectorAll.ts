import { arrayFrom } from '../array/arrayFrom';

import type { Queryable } from './aliases/Queryable';

function querySelectorAll<T extends Element>(
    selector: string,
    context: Queryable = document
): T[] {
    return arrayFrom(context.querySelectorAll<T>(selector));
}

export { querySelectorAll };
