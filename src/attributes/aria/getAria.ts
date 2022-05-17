import { getAttr } from '../getAttr';

/**
 * Get the aria attribute from an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to retrieve the aria attribute from.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {string|null}
 */
function getAria(element: Element, name: string): string | null {
    return getAttr(element, `aria-${name}`);
}

export { getAria };
