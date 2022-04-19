/**
 * Empty an element.
 * @since 0.1.0
 *
 * @param {Element} element The element to empty.
 *
 * @returns {void}
 */
function emptyElement<T extends Element>(element: T): void {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export { emptyElement };
