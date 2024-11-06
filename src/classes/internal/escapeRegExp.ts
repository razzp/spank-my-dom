/**
 * Escape any special characters in a string prior to it being used in a
 * regular expression.
 * @private
 */
function escapeRegExp(input: string): string {
    return input.replace(/[-[\]{}()*+?.,\\^$|]/g, '\\$&');
}

export { escapeRegExp };
