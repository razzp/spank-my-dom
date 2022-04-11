import { escapeRegExp } from './internal/escapeRegExp';
import { getClasses } from './internal/getClasses';

/**
 * Get classes from an element that end with a specified string.
 *
 * @param search The string to search for.
 * @param element The element to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClassesEndingWith(
    search: string,
    element: Element,
    ignoreCase?: boolean
): string[];

/**
 * Get classes from a string that end with a specified string.
 *
 * @param search The string to search for.
 * @param classList The string to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClassesEndingWith(
    search: string,
    classList: string,
    ignoreCase?: boolean
): string[];

function getClassesEndingWith(
    search: string,
    context: Element | string,
    ignoreCase = false
): string[] {
    return getClasses(context, `[^\\s]+${escapeRegExp(search)}`, ignoreCase);
}

export { getClassesEndingWith };
