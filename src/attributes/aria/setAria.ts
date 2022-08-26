import { setAttr } from '../setAttr';

/**
 * Set an aria attribute on an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to set the aria attribute on.
 * @param {string} name The name of the aria attribute.
 * @param {unknown} value The value of the aria attribute.
 *
 * @returns {void}
 */
function setAria(element: Element, name: string, value: unknown): void {
    setAttr(element, `aria-${name}`, value);
}

export { setAria };
