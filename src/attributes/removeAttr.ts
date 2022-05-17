import { toggleAttr } from './toggleAttr';

/**
 * Remove an attribute from an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to remove the attribute from.
 * @param {string} name The name of the attribute.
 *
 * @returns {void}
 */
function removeAttr(element: Element, name: string): void {
    toggleAttr(element, name, '', false);
}

export { removeAttr };
