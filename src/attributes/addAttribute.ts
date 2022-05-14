import { toggleAttribute } from './toggleAttribute';

/**
 * Add an attribute to an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to add the attribute to.
 * @param {string} name The name of the attribute.
 * @param {unknown} value The value of the attribute.
 *
 * @returns {void}
 */
function addAttribute(element: Element, name: string, value: unknown): void {
    toggleAttribute(element, name, value, true);
}

export { addAttribute };
