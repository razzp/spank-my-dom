/**
 * Check if an attribute exists on an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to check.
 * @param {string} name The name of the attribute.
 *
 * @returns {boolean}
 */
function hasAttr(element: Element, name: string): boolean {
    return element.hasAttribute(name);
}

export { hasAttr };
