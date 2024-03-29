import { setAttr } from '../setAttr';

/**
 * Set a data attribute on an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to set the data attribute on.
 * @param {string} name The name of the data attribute.
 * @param {unknown} value The value of the data attribute.
 *
 * @returns {void}
 */
function setData(element: Element, name: string, value: unknown): void {
    setAttr(element, `data-${name}`, value);
}

export { setData };
