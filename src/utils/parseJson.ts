/**
 * Convert a JSON string into an object.
 * @since 1.0.0
 *
 * @param {string} input A valid JSON string.
 * @param {function} reviver A function that transforms the results.
 *
 * @returns {object}
 */
function parseJson<T>(
    input: string,
    reviver?: (key: string, value: unknown) => unknown
): T {
    return JSON.parse(input, reviver);
}

export { parseJson };
