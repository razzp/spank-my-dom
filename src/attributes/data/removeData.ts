import { removeAttr } from '../removeAttr';

/**
 * Remove a data attribute from an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to remove the data attribute from.
 * @param {string} name The name of the data attribute.
 *
 * @returns {void}
 */
function removeData(element: Element, name: string): void {
    removeAttr(element, `data-${name}`);
}

export { removeData };
