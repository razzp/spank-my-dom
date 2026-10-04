/**
 * Remove styles from an element.
 *
 * @param element - The element to remove styles from.
 * @param props - The styles to remove.
 *
 * @example
 * ```ts
 * removeStyles(document.documentElement, ['--foo']);
 * ```
 *
 * @public
 */
function removeStyles(
    element: HTMLElement | SVGElement | MathMLElement,
    props: string[],
): void {
    for (const prop of props) {
        element.style.removeProperty(prop);
    }
}

export { removeStyles };
