function getSiblings<T extends Element>(
    method: `${'next' | 'previous'}ElementSibling`,
    element: Element,
    selector?: string,
): T[] {
    const siblings: T[] = [];

    let current: Element | null = element;

    do {
        current = current[method];

        if (current) {
            siblings.push(current as T);
        }
    } while (current);

    return selector
        ? // A selector was provided, so filter the results.
          siblings.filter((sibling) => sibling.matches(selector))
        : // Return the results as-is.
          siblings;
}

export { getSiblings };
