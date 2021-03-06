import { getAttr } from '../getAttr';

/**
 * Get the aria attribute from an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to retrieve the aria attribute from.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {null|string}
 */
function getAria(element: Element, name: string): null | string {
    return getAttr(element, `aria-${name}`);
}

export { getAria };
