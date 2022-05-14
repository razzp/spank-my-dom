import { getAttribute } from '../getAttribute';

/**
 * Get the data attribute from an element.
 * @since 0.3.0
 *
 * @param {Element} element The element to retrieve the data attribute from.
 * @param {string} name The name of the data attribute.
 *
 * @returns {string|null}
 */
function getData(element: Element, name: string): string | null {
    return getAttribute(element, `data-${name}`);
}

export { getData };
