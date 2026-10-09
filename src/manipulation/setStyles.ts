/**
 * Object describing a conditional style value to add.
 *
 * @public
 */
interface SetStylesConditionalProp {
    /**
     * The style value.
     */
    value: string;
    /**
     * The condition that must pass for the style to be added.
     */
    condition: boolean | ((prop: string, value: string) => boolean);
}

/**
 * Set styles on an element.
 *
 * @param element - The element to set styles on.
 * @param props - The style properties to add.
 *
 * @example
 * ```ts
 * setStyles(document.documentElement, {
 *     '--foo': '10px',
 *     '--bar': '20px',
 * });
 * ```
 *
 * @example
 * Set styles based on a condition.
 * ```ts
 * setStyles(document.documentElement, {
 *     '--foo': {
 *         value: '10px',
 *         condition: true,
 *     },
 *     '--bar': {
 *         value: '20px',
 *         condition: (prop, value) => true,
 *     },
 * });
 * ```
 *
 * @public
 */
function setStyles(
    element: HTMLElement | SVGElement | MathMLElement,
    props: { [prop: string]: string | SetStylesConditionalProp },
): void {
    for (const [prop, value] of Object.entries(props)) {
        if (typeof value === 'string') {
            element.style.setProperty(prop, value);
        } else {
            const { condition, value: objValue } = value;

            if (
                (typeof condition === 'boolean' && condition === true) ||
                (typeof condition === 'function' &&
                    condition(prop, objValue) === true)
            ) {
                element.style.setProperty(prop, objValue);
            }
        }
    }
}

export { setStyles, type SetStylesConditionalProp };
