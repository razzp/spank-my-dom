/**
 * Escape any special characters in a string prior to it being used in a
 * regular expression.
 * @since 2.0.0
 *
 * @returns {string}
 */
function escapeRegExp(input: string): string {
    return input.replace(/[-[\]{}()*+?.,\\^$|]/g, '\\$&');
}

export { escapeRegExp };
