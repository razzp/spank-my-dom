import { toggleAttr } from '../toggleAttr';

/**
 * Toggle the data attribute of an element. If force is included, turns the toggle
 * into a one way-only operation. If set to false, the data attribute will only be
 * removed. If set to true, the data attribute will only be added.
 * @since 1.0.0
 *
 * @param {Element} element The element to toggle the data attribute on.
 * @param {string} name The name of the data attribute.
 * @param {unknown} value The value of the data attribute.
 * @param {boolean} [force] Restrict toggle to a one-way operation only.
 *
 * @returns {boolean}
 */
function toggleData(
    element: Element,
    name: string,
    value: unknown,
    force?: boolean
): boolean {
    return toggleAttr(element, `data-${name}`, value, force);
}

export { toggleData };
