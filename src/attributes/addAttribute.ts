import { toggleAttribute } from './toggleAttribute';

import type { AttributeType } from './aliases/AttributeType';

/**
 * Add an attribute to an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to add the attribute to.
 * @param {string} name The name of the attribute.
 * @param {string|number|boolean} value The value of the attribute.
 *
 * @returns {boolean}
 */
function addAttribute(
    element: Element,
    name: string,
    value: AttributeType
): void {
    toggleAttribute(element, name, value, true);
}

export { addAttribute };
