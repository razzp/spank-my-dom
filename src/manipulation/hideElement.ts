/**
 * Visually hide an element.
 *
 * @param element - The element to hide.
 *
 * @example
 * ```ts
 * hideElement(element);
 * ```
 *
 * @public
 */
function hideElement(element: HTMLElement): void {
    element.style.setProperty('display', 'none', 'important');
}

export { hideElement };
