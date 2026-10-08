/**
 * Remove one or more classes from an element.
 *
 * @param element - The element to remove classes from.
 * @param classes - The class(es) to remove from the element.
 *
 * @example
 * ```ts
 * removeClasses(element, 'foo', 'bar');
 * ```
 *
 * @example
 * Remove classes based on a condition.
 * ```ts
 * removeClasses(element, {
 *     'foo': true,
 *     'bar': (token) => token === 'bar',
 * });
 * ```
 *
 * @public
 */
function removeClasses(
    element: HTMLElement | SVGElement | MathMLElement,
    ...classes: (
        | string
        | { [token: string]: boolean | ((token: string) => boolean) }
    )[]
): void {
    for (const item of classes) {
        if (typeof item === 'string') {
            element.classList.remove(item);
        } else {
            for (const [token, value] of Object.entries(item)) {
                if (
                    (typeof value === 'boolean' && value === true) ||
                    (typeof value === 'function' && value(token) === true)
                ) {
                    element.classList.remove(token);
                }
            }
        }
    }
}

export { removeClasses };
