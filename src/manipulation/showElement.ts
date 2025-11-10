/**
 * Visually show an element.
 *
 * @param element - The element to show.
 *
 * @example
 * ```ts
 * showElement(element);
 * ```
 *
 * @public
 */
function showElement(element: HTMLElement): void {
    element.style.removeProperty('display');
}

export { showElement };
