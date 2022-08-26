import { removeAttr } from '../removeAttr';

/**
 * Remove a aria attribute from an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to remove the aria attribute from.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {void}
 */
function removeAria(element: Element, name: string): void {
    removeAttr(element, `aria-${name}`);
}

export { removeAria };
