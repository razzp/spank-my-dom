import type { NullOr } from '../aliases/NullOr';
import type { Queryable } from './aliases/Queryable';

function querySelector<T extends Element>(
    selectors: string,
    context: Queryable = document
): NullOr<T> {
    return context.querySelector(selectors);
}

export { querySelector };
