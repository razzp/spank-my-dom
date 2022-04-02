type SearchType = 'containing' | 'startingwith' | 'endingwith';
type PatternFactory = (searchString: string) => string;

const patternMap = new Map<SearchType, PatternFactory>([
    ['containing', (str) => `[^\\s]+${str}[^\\s]+`],
    ['startingwith', (str) => `${str}[^\\s]+`],
    ['endingwith', (str) => `[^\\s]+${str}`],
]);

function getClasses(
    searchType: SearchType,
    searchString: string,
    element: Element,
    ignoreCase?: boolean
): string[];

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
    const getPattern = patternMap.get(searchType);

    if (!getPattern) {
        throw new TypeError(`Invalid search type: ${searchType}`);
    }

    const classList = context instanceof Element ? context.className : context;
    const flags = `g${ignoreCase ? 'i' : ''}`;
    const matcher = new RegExp(getPattern(searchString), flags);

    return classList.match(matcher) ?? [];
}

export { getClasses };
