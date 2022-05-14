import { toggleAria } from './toggleAria';

/**
 * Remove a aria attribute from an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to remove the aria attribute from.
 * @param {string} name The name of the aria attribute.
 *
 * @returns {void}
 */
function removeAria(element: Element, name: string): void {
    toggleAria(element, name, '', false);
}

export { removeAria };
