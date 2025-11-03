/**
 * Empty an element.
 *
 * @param element - The element to empty.
 *
 * @public
 */
function emptyElement<T extends Element>(element: T): void {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

export { emptyElement };
