/**
 * Compute the scrollbar width of the page.
 *
 * @example
 * ```ts
 * const scrollbarWidth = getScrollbarWidth();
 * ```
 *
 * @public
 */
function getScrollbarWidth(): number {
    const tempElement = document.createElement('div');

    tempElement.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 100px;
        height: 100px;
        overflow: scroll;
    `;

    document.body.appendChild(tempElement);

    const width = tempElement.offsetWidth - tempElement.clientWidth;

    tempElement.remove();

    return width;
}

export { getScrollbarWidth };
