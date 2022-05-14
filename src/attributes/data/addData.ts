import { toggleData } from './toggleData';

/**
 * Add a data attribute to an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to add the data attribute to.
 * @param {string} name The name of the data attribute.
 * @param {unknown} value The value of the data attribute.
 *
 * @returns {void}
 */
function addData(element: Element, name: string, value: unknown): void {
    toggleData(element, name, value, true);
}

export { addData };
