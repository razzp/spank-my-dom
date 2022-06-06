import { ConvertibleTypes } from './interfaces/ConvertibleTypes';

/**
 * Convert a string into another primitive type.
 * @since 1.0.0
 *
 * @param {string} input The string to convert.
 * @param {'boolean'|'number'} type The type to convert to.
 *
 * @returns {boolean|number}
 */
function strConvert<T extends keyof ConvertibleTypes>(
    input: string,
    type: T
): ConvertibleTypes[T] {
    switch (type) {
        case 'boolean':
            return (input.trim().toLowerCase() === 'true') as never;
        case 'number':
            return Number(input) as never;
    }

    // Type not supported.
    throw new Error(`Cannot convert to type: ${type}`);
}

export { strConvert };
