import { getAttr } from '../getAttr';

/**
 * Get the data attribute from an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to retrieve the data attribute from.
 * @param {string} name The name of the data attribute.
 *
 * @returns {null|string}
 */
function getData(element: Element, name: string): null | string {
    return getAttr(element, `data-${name}`);
}

export { getData };
