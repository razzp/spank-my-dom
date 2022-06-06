/**
 * Convert a string into a boolean.
 * @since 1.0.0
 *
 * @param {string} input The string to convert.
 *
 * @returns {boolean}
 */
function toBoolean(input: string): boolean {
    return input.trim().toLowerCase() === 'true';
}

export { toBoolean };
