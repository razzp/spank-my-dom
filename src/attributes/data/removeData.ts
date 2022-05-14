import { toggleData } from './toggleData';

/**
 * Remove a data attribute from an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to remove the data attribute from.
 * @param {string} name The name of the data attribute.
 *
 * @returns {void}
 */
function removeData(element: Element, name: string): void {
    toggleData(element, name, '', false);
}

export { removeData };
