/**
 * Find classes on an element that partially match a value.
 *
 * @param searchType - The type of search to perform.
 * @param element - The element to search.
 * @param partialValue - The partial value to try and match.
 *
 * @public
 */
function getPartialClasses(
    searchType: 'startingwith' | 'containing' | 'endingwith',
    element: Element,
    partialValue: string,
): string[] {
    const getResult = (pattern: string, token: string) =>
        new RegExp(pattern).exec(token)?.[0] ?? null;

    return [...element.classList]
        .map((token) => {
            switch (searchType) {
                case 'startingwith':
                    return getResult(`^${partialValue}.+`, token);
                case 'containing':
                    return getResult(`.+${partialValue}.+`, token);
                case 'endingwith':
                    return getResult(`.+${partialValue}$`, token);
                default:
                    return null;
            }
        })
        .filter((result) => result !== null);
}

export { getPartialClasses };
