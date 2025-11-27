/**
 * Get a data attribute's value from an element, optionally passing
 * it through a reviver function to transform its value.
 *
 * @param element - The element to get the data from.
 * @param name - The name of the data attribute.
 * @param reviver - A function to transform the result.
 *
 * @throws {SyntaxError}
 * If no data is found.
 *
 * @example
 * Get an element's data.
 * ```ts
 * const result = getDataOrThrow(element, 'foo');
 * ```
 *
 * @example
 * Get an element's data and transform the result.
 * ```ts
 * const result = getDataOrThrow(element, 'foo', (value) => `The value is: ${value}`);
 * ```
 *
 * @example
 * Get an element's data and parse as a number.
 * ```ts
 * const result = getDataOrThrow(element, 'foo', parseFloat);
 * ```
 *
 * @example
 * Get an element's data and parse as a boolean (using {@link parseBoolean}).
 * ```ts
 * const result = getDataOrThrow(element, 'foo', parseBoolean);
 * ```
 *
 * @public
 */
function getDataOrThrow<T = string>(
    element: HTMLElement,
    name: string,
    reviver?: (value: string) => T,
): T {
    const value = element.dataset[name];

    if (typeof value === 'undefined') {
        throw new SyntaxError(`No data attribute found for: ${name}`);
    }

    return reviver ? reviver(value) : (value as T);
}

export { getDataOrThrow };
