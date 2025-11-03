/**
 * Toggle the attribute of an element. If force is included, turns the toggle
 * into a one way-only operation. If set to false, the attribute will only be
 * removed. If set to true, the attribute will only be added.
 * @since 1.0.0
 *
 * @param {Element} element The element to toggle the attribute on.
 * @param {string} name The name of the attribute.
 * @param {} value The value of the attribute.
 * @param {boolean} [force] Restrict toggle to a one-way operation only.
 *
 * @returns {boolean}
 */
function toggleAttribute(
    element: Element,
    name: string,
    value: string,
    force?: boolean,
): boolean {
    const hasForce = typeof force === 'boolean';

    if (element.hasAttribute(name)) {
        if (!hasForce || !force) {
            // Remove the attribute and return false as the attribute no longer
            // exists on the element.
            element.removeAttribute(name);
            return false;
        } else {
            // Return true as the attribute exists on the element.
            return true;
        }
    } else {
        if (!hasForce || force) {
            // Set the attribute and return true as the attribute now exists on
            // the element.
            element.setAttribute(name, value);
            return true;
        } else {
            // Return false as the attribute does not exist on the element.
            return false;
        }
    }
}

export { toggleAttribute };

// TODO: check signature
