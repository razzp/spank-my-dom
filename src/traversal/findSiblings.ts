/**
 * Find the siblings of an element, optionally filtered by selectors.
 *
 * @group Traversal
 *
 * @param direction - The direction(s) to search from `element`.
 * @param element - The element whose siblings will be returned.
 * @param selectors - One or more selectors to match.
 *
 * @example
 * Find all siblings of an element.
 * ```ts
 * const siblings = findSiblings('all', element);
 * ```
 *
 * @example
 * Find all siblings before an element.
 * ```ts
 * const siblings = findSiblings('before', element);
 * ```
 *
 * @example
 * Find all siblings after an element.
 * ```ts
 * const siblings = findSiblings('after', element);
 * ```
 *
 * @example
 * Find siblings of an element, filtered by a CSS selector.
 * ```ts
 * const siblings = findSiblings('all', element, '.foo');
 * ```
 */
function findSiblings<T extends Element>(
    direction: 'all' | 'before' | 'after',
    element: Element,
    selectors?: string,
): T[] {
    const output: T[] = [];

    const walk = (method: keyof NonDocumentTypeChildNode) => {
        let current: Element | null = element;

        while (current) {
            current = current[method];

            if (current) {
                output.push(current as T);
            }
        }
    };

    if (direction === 'all' || direction === 'before') {
        walk('previousElementSibling');
        output.reverse();
    }

    if (direction === 'all' || direction === 'after') {
        walk('nextElementSibling');
    }

    return selectors
        ? output.filter((element) => element.matches(selectors))
        : output;
}

export { findSiblings };
