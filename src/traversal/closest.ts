/**
 * Returns the first ancestor that matches selector. Not inclusive of element.
 * @since 0.2.0
 *
 * @param {Element} element The element from which to search.
 * @param {string} selector Selector to match ancestors against.
 * @param {boolean} [skipSelf=true] Ignore `element` even if it matches.
 *
 * @returns {null|Element}
 */
function closest<T extends Element>(
    element: Element,
    selector: string,
    skipSelf: boolean = true,
): null | T {
    return skipSelf
        ? (element.parentElement?.closest(selector) ?? null)
        : element.closest(selector);
}

export { closest };

// TODO: UPDATE TESTS FOR `skipSelf`
