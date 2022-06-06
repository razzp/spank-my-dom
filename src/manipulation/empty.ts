/**
 * Empty an element.
 * @since 1.0.0
 *
 * @param {Element} element The element to empty.
 *
 * @returns {void}
 */
function empty<T extends Element>(element: T): void {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export { empty };
