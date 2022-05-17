import { escapeRegExp } from './internal/escapeRegExp';
import { getClasses } from './internal/getClasses';

/**
 * Get classes from an element or string that start with a specified string.
 * @since 0.3.0
 *
 * @param {string} search The string to search for.
 * @param {Element|string} context The context to perform the search on.
 * @param {boolean} [ignoreCase=false] Set the case-sensitivity of the search.
 *
 * @returns {string[]}
 */
function classesStartingWith(
    search: string,
    context: Element | string,
    ignoreCase = false
): string[] {
    return getClasses(context, `${escapeRegExp(search)}[^\\s]+`, ignoreCase);
}

export { classesStartingWith };
