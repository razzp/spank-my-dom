import { escapeRegExp } from '../utils/escapeRegExp';
import { getClasses } from './internal/getClasses';

/**
 * Get classes from an element or string that end with a specified string.
 * @since 1.0.0
 *
 * @param {string} search The string to search for.
 * @param {Element|string} context The context to perform the search on.
 * @param {boolean} [ignoreCase=false] Set the case-sensitivity of the search.
 *
 * @returns {string[]}
 */
function classesEndingWith(
    search: string,
    context: Element | string,
    ignoreCase: boolean = false,
): string[] {
    return getClasses(context, `[^\\s]+${escapeRegExp(search)}`, ignoreCase);
}

export { classesEndingWith };
