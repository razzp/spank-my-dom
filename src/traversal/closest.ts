/**
 * Returns the first ancestor of `element` that matches selector, or optionally itself.
 * @since 0.2.0
 *
 * @param {Element} element The element from which to search.
 * @param {string} selector Selector to match against.
 * @param {boolean} [skipSelf=true] Ignore `element` even if it matches.
 *
 * @returns {null|Element}
 */
function closest<T extends Element>(
    element: Element,
    selector: string,
    skipSelf: boolean = false,
): null | T {
    return skipSelf
        ? (element.parentElement?.closest(selector) ?? null)
        : element.closest(selector);
}

export { closest };

// TODO: should `skipself` default be false?
