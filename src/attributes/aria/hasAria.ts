import { hasAttr } from '../hasAttr';

/**
 * Check if an aria attribute exists on an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {boolean}
 */
function hasAria(element: Element, name: string): boolean {
    return hasAttr(element, `aria-${name}`);
}

export { hasAria };
