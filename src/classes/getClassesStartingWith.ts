import { escapeRegExp } from './internal/escapeRegExp';
import { getClasses } from './internal/getClasses';

/**
 * Get classes from an element that start with a specified string.
 *
 * @param search The string to search for.
 * @param element The element to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClassesStartingWith(
    search: string,
    element: Element,
    ignoreCase?: boolean
): string[];

/**
 * Get classes from a string that start with a specified string.
 *
 * @param search The string to search for.
 * @param classList The string to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClassesStartingWith(
    search: string,
    classList: string,
    ignoreCase?: boolean
): string[];

function getClassesStartingWith(
    search: string,
    context: Element | string,
    ignoreCase = false
): string[] {
    return getClasses(context, `${escapeRegExp(search)}[^\\s]+`, ignoreCase);
}

export { getClassesStartingWith };
