import { toggleAttribute } from './toggleAttribute';

/**
 * Set an attribute on an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to set the attribute on.
 * @param {string} name The name of the attribute.
 * @param {unknown} value The value of the attribute.
 *
 * @returns {void}
 */
function setAttribute(element: Element, name: string, value: unknown): void {
    toggleAttribute(element, name, value, true);
}

export { setAttribute };
