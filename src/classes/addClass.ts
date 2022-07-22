import { toggleClass } from './toggleClass';

/**
 * Add one or more classes to an element.
 * @since 0.2.0
 *
 * @param {Element} element The element to add the class(es) to.
 * @param {string[]} tokens The class(es) to add.
 *
 * @returns {void}
 */
function addClass(element: Element, ...tokens: string[]): void {
    toggleClass(element, tokens, true);
}

export { addClass };
