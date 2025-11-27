/** biome-ignore-all lint/suspicious/noExplicitAny: Copying native implementation */

/**
 * Convert a JSON string into an object.
 *
 * @remarks
 * The purpose of this function is simply to allow type inference.
 * At runtime this is synonymous with calling [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
 *
 * @param input - The JSON string to parse.
 * @param reviver - A function that transforms the results.
 *
 * @throws
 * SyntaxError - If `input` is not valid JSON.
 *
 * @example
 * ```ts
 * interface Model {
 *     foo: string;
 * }
 *
 * const parsed = parseJson<Model>('{"foo":"bar"}');
 * ```
 *
 * @public
 */
function parseJson<T = any>(
    input: string,
    reviver?: (this: any, key: string, value: any) => any,
): T {
    return JSON.parse(input, reviver);
}

export { parseJson };
