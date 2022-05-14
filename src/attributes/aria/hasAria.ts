import { hasAttribute } from '../hasAttribute';

/**
 * Check if an aria attribute exists on an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {boolean}
 */
function hasAria(element: Element, name: string): boolean {
    return hasAttribute(element, `aria-${name}`);
}

export { hasAria };
