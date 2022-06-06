/**
 * Get the attribute from an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to retrieve the attribute from.
 * @param {string} name The name of the attribute.
 *
 * @returns {null|string}
 */
function getAttr(element: Element, name: string): null | string {
    return element.getAttribute(name);
}

export { getAttr };
