/**
 * Convert a string into another type.
 * @private
 */
function convertStringToType(input: string, type: string): unknown {
    switch (type) {
        case 'boolean':
            return input.trim() === 'true';
        case 'number':
            return Number(input);
        default:
            return input;
    }
}

export { convertStringToType };
