/**
 * Parse a string value as a boolean.
 *
 * @remarks
 * If `true` cannot be derived, result will always be `false`.
 *
 * @param input - The value to parse.
 *
 * @example
 * ```ts
 * const result = parseBoolean('true');
 * ```
 *
 * @public
 */
function parseBoolean(input: string): boolean {
    return input.trim().toLowerCase() === 'true';
}

export { parseBoolean };
