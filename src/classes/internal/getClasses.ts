/**
 * Given a search pattern, find any classes that match.
 * @private
 */
function getClasses(
    context: Element | string,
    pattern: string,
    ignoreCase: boolean,
): string[] {
    // Build a RegExp for the search.
    const matcher = new RegExp(pattern, `g${ignoreCase ? 'i' : ''}`);

    // Sanitise the context so we have a string.
    const classList = context instanceof Element ? context.className : context;

    // Run the RegExp and return any matches.
    return classList.match(matcher) ?? [];
}

export { getClasses };
