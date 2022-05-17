import { toggleAttr } from '../toggleAttr';

/**
 * Toggle the aria attribute of an element. If force is included, turns the toggle
 * into a one way-only operation. If set to false, the aria attribute will only be
 * removed. If set to true, the aria attribute will only be added.
 * @since 0.3.0
 *
 * @param {Element} element The element to toggle the aria attribute on.
 * @param {string} name The name of the aria attribute.
 * @param {unknown} value The value of the aria attribute.
 * @param {boolean} [force] Restrict toggle to a one-way operation only.
 *
 * @returns {boolean}
 */
function toggleAria(
    element: Element,
    name: string,
    value: unknown,
    force?: boolean
): boolean {
    return toggleAttr(element, `aria-${name}`, value, force);
}

export { toggleAria };
