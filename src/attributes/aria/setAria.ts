import { toggleAria } from './toggleAria';

/**
 * Set an aria attribute on an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to set the aria attribute on.
 * @param {string} name The name of the aria attribute.
 * @param {unknown} value The value of the aria attribute.
 *
 * @returns {void}
 */
function setAria(element: Element, name: string, value: unknown): void {
    toggleAria(element, name, value, true);
}

export { setAria };
