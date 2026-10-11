/**
 * Remove styles from an element.
 *
 * @param element - The element to remove styles from.
 * @param props - The styles to remove.
 *
 * @example
 * ```ts
 * removeStyles(document.documentElement, ['--foo', '--bar']);
 * ```
 *
 * @example
 * Remove styles based on a condition.
 * ```ts
 * removeStyles(document.documentElement, [
 *     {
 *         '--foo': true,
 *     },
 *     {
 *         '--bar': (value) => true,
 *     }
 * ]);
 * ```
 *
 * @public
 */
function removeStyles(
    element: HTMLElement | SVGElement | MathMLElement,
    props: (
        | string
        | { [prop: string]: boolean | ((prop: string) => boolean) }
    )[],
): void {
    for (const item of props) {
        if (typeof item === 'string') {
            element.style.removeProperty(item);
        } else {
            for (const [prop, value] of Object.entries(item)) {
                if (
                    (typeof value === 'boolean' && value === true) ||
                    (typeof value === 'function' && value(prop) === true)
                ) {
                    element.style.removeProperty(prop);
                }
            }
        }
    }
}

export { removeStyles };
