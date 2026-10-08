/**
 * Set one or more classes on an element.
 *
 * @param element - The element to add classes to.
 * @param classes - The class(es) to add to the element.
 *
 * @example
 * ```ts
 * setClasses(element, 'foo', 'bar');
 * ```
 *
 * @example
 * Add classes based on a condition.
 * ```ts
 * setClasses(element, {
 *     'foo': true,
 *     'bar': (token) => token === 'bar',
 * });
 * ```
 *
 * @public
 */
function setClasses(
    element: HTMLElement | SVGElement | MathMLElement,
    ...classes: (
        | string
        | { [token: string]: boolean | ((token: string) => boolean) }
    )[]
): void {
    for (const item of classes) {
        if (typeof item === 'string') {
            element.classList.add(item);
        } else {
            for (const [token, value] of Object.entries(item)) {
                if (
                    (typeof value === 'boolean' && value === true) ||
                    (typeof value === 'function' && value(token) === true)
                ) {
                    element.classList.add(token);
                }
            }
        }
    }
}

export { setClasses };
