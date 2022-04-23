import type { SiblingAccumulatorMethod } from '../aliases/SiblingsAccumulatorMethod';

/**
 * Accumulate siblings that optionally match a selector.
 * @private
 */
function siblingAccumulator<T extends Element>(
    method: SiblingAccumulatorMethod,
    element: Element,
    selector?: string
): T[] {
    const results: T[] = [];

    let current = element[method];

    while (current) {
        results.push(current as T);
        current = current[method];
    }

    return selector
        ? // A selector was provided, so filter the results.
          results.filter((result) => result.matches(selector))
        : // Return the results as-is.
          results;
}

export { siblingAccumulator };
