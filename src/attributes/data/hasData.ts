import { hasAttribute } from '../hasAttribute';

/**
 * Check if a data attribute exists on an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the data attribute.
 *
 * @returns {boolean}
 */
function hasData(element: Element, name: string): boolean {
    return hasAttribute(element, `data-${name}`);
}

export { hasData };
