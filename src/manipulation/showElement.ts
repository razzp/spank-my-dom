/**
 * Visually show an element.
 *
 * @group Manipulation
 *
 * @param element - The element to show.
 *
 * @example
 * ```ts
 * showElement(element);
 * ```
 */
function showElement(element: HTMLElement): void {
    element.style.removeProperty('display');
}

export { showElement };
