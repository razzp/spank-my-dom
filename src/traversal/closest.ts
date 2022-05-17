/**
 * Returns the first ancestor that matches selector. Not inclusive of element.
 * @since 0.2.0
 *
 * @param {Element} element The element from which to search.
 * @param {string} selector Selector to match ancestors against.
 *
 * @returns {null|Element}
 */
function closest<T extends Element>(
    element: Element,
    selector: string
): null | T {
    return element.parentElement?.closest(selector) ?? null;
}

export { closest };
