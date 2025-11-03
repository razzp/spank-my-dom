/**
 * Visually hide an element.
 *
 * @param element - The element to hide.
 *
 * @public
 */
function hideElement(element: HTMLElement): void {
    element.style.setProperty('display', 'none', 'important');
}

export { hideElement };
