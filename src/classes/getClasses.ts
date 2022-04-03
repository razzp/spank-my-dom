type SearchType = 'containing' | 'startingwith' | 'endingwith';
type PatternFactory = (searchString: string) => string;

// This is used to map search types to dynamic RegExp patterns.
const patternMap = new Map<SearchType, PatternFactory>([
    ['containing', (str) => `[^\\s]+${str}[^\\s]+`],
    ['startingwith', (str) => `${str}[^\\s]+`],
    ['endingwith', (str) => `[^\\s]+${str}`],
]);

/**
 * Get classes from an element that satisfy a predicate search type.
 * @param searchType The type of search to perform.
 * @param searchString The string to search for.
 * @param element The element to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClasses(
    searchType: SearchType,
    searchString: string,
    element: Element,
    ignoreCase?: boolean
): string[];

/**
 * Get classes from a string that satisfy a predicate search type.
 * @param searchType The type of search to perform.
 * @param searchString The string to search for.
 * @param classList The string to perform the search on.
 * @param ignoreCase Set the case sensitivity of the search.
 */
function getClasses(
    searchType: SearchType,
    searchString: string,
    classList: string,
    ignoreCase?: boolean
): string[];

function getClasses(
    searchType: SearchType,
    searchString: string,
    context: Element | string,
    ignoreCase = false
): string[] {
    // Get the corresponding pattern from the map.
    const getPattern = patternMap.get(searchType);

    if (!getPattern) {
        // The pattern wasn't found, so throw an error.
        throw new TypeError(`Invalid search type: ${searchType}`);
    }

    // Build a RegExp for this search.
    const matcher = new RegExp(
        getPattern(searchString),
        `g${ignoreCase ? 'i' : ''}`
    );

    // Sanitise the input so we have a string.
    const classList = context instanceof Element ? context.className : context;

    // Run the RegExp and return any matches.
    return classList.match(matcher) ?? [];
}

export { getClasses };
