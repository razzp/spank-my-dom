import { toggleClass } from './toggleClass';

/**
 * Remove one or more classes from an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to remove the class(es) from.
 * @param {string[]} tokens The class(es) to remove.
 *
 * @returns {void}
 */
function removeClass(element: Element, ...tokens: string[]): void {
    toggleClass(element, tokens, false);
}

export { removeClass };
