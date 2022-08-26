/**
 * Set an attribute on an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to set the attribute on.
 * @param {string} name The name of the attribute.
 * @param {unknown} value The value of the attribute.
 *
 * @returns {void}
 */
function setAttr(element: Element, name: string, value: unknown): void {
    element.setAttribute(name, String(value));
}

export { setAttr };
