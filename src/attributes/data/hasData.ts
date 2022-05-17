import { hasAttr } from '../hasAttr';

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
    return hasAttr(element, `data-${name}`);
}

export { hasData };
