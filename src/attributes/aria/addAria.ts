import { toggleAria } from './toggleAria';

/**
 * Add an aria attribute to an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to add the aria attribute to.
 * @param {string} name The name of the aria attribute.
 * @param {unknown} value The value of the aria attribute.
 *
 * @returns {void}
 */
function addAria(element: Element, name: string, value: unknown): void {
    toggleAria(element, name, value, true);
}

export { addAria };
