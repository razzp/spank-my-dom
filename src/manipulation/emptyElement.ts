/**
 * Empty an element.
 * @category Manipulation
 * @since 1.0.0
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
