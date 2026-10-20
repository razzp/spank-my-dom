/**
 * Empty an element.
 *
 * @group Manipulation
 *
 * @param element - The element to empty.
 *
 * @example
 * ```ts
 * emptyElement(element);
 * ```
 */
function emptyElement<T extends Element>(element: T): void {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

export { emptyElement };
