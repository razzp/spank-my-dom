/**
 * Visually hide an element.
 *
 * @group Manipulation
 *
 * @param element - The element to hide.
 *
 * @example
 * ```ts
 * hideElement(element);
 * ```
 */
function hideElement(element: HTMLElement): void {
    element.style.setProperty('display', 'none', 'important');
}

export { hideElement };
