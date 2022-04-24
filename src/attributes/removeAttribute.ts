import { toggleAttribute } from './toggleAttribute';

/**
 * Remove an attribute from an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to remove the attribute from.
 * @param {string} name The name of the attribute.
 *
 * @returns {boolean}
 */
function removeAttribute(element: Element, name: string): void {
    toggleAttribute(element, name, '', false);
}

export { removeAttribute };
