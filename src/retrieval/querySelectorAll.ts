import type { Queryable } from './aliases/Queryable';

function querySelectorAll<T extends Element>(
    selector: string,
    context: Queryable = document
): T[] {
    return [...context.querySelectorAll<T>(selector)];
}

export { querySelectorAll };
