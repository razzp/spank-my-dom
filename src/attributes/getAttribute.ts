/**
 * Get the attribute from an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to retrieve the attribute from.
 * @param {string} name The name of the attribute.
 *
 * @returns {string|null}
 */
function getAttribute(element: Element, name: string): string | null {
    return element.getAttribute(name);
}

export { getAttribute };
