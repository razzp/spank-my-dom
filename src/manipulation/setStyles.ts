/**
 * Set styles on an element.
 *
 * @param element - The element to set styles on.
 * @param props - The styles to add.
 *
 * @example
 * ```ts
 * setStyles(document.documentElement, {
 *     '--foo': '10px',
 * });
 * ```
 *
 * @public
 */
function setStyles(
    element: HTMLElement | SVGElement | MathMLElement,
    props: Record<string, string>,
): void {
    for (const [prop, value] of Object.entries(props)) {
        element.style.setProperty(prop, value);
    }
}

export { setStyles };
