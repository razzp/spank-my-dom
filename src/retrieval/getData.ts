/**
 * Get a data attribute's value from an element, optionally passing
 * it through a reviver function to transform its value.
 *
 * @remarks
 * Undefined attributes are returned as `null` to maintain consistency with
 * other methods such as `querySelector()`, or `getAttribute()`.
 *
 * @param element - The element to get the data from.
 * @param name - The name of the data attribute.
 * @param reviver - A function to transform the result.
 *
 * @example
 * Get an element's data.
 * ```ts
 * const result = getData(element, 'foo');
 * ```
 *
 * @example
 * Get an element's data and transform the result.
 * ```ts
 * const result = getData(element, 'foo', (value) => `The value is: ${value}`);
 * ```
 *
 * @example
 * Get an element's data and parse as a number.
 * ```ts
 * const result = getData(element, 'foo', parseFloat);
 * ```
 *
 * @example
 * Get an element's data and parse as a boolean (using {@link parseBoolean}).
 * ```ts
 * const result = getData(element, 'foo', parseBoolean);
 * ```
 *
 * @public
 */
function getData<T = string>(
    element: HTMLElement,
    name: string,
    reviver?: (value: string) => T,
): null | T {
    const value = element.dataset[name];

    if (typeof value === 'undefined') {
        return null;
    }

    return reviver ? reviver(value) : (value as T);
}

export { getData };
