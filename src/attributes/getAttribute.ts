import { convertStringToType } from './internal/convertStringToType';

import type { NullOr } from '../aliases/NullOr';
import type { StringConvertibleTypesDict } from '../interfaces/StringConvertibleTypesDict';

/**
 * Get the attribute from an element, optionally converting it to another type.
 * If the attribute doesn't exist then null is returned instead.
 * @since 0.2.0
 *
 * @param {Element} element The element to retrieve the attribute from.
 * @param {string} name The name of the attribute.
 *
 * @returns {null|string}
 */
function getAttribute(element: Element, name: string): NullOr<string>;

/**
 * Get the attribute from an element, optionally converting it to another type.
 * If the attribute doesn't exist then null is returned instead.
 * @since 0.2.0
 *
 * @param {Element} element The element to retrieve the attribute from.
 * @param {string} name The name of the attribute.
 * @param {boolean|number} type The type to convert the value to.
 *
 * @returns {null|T}
 */
function getAttribute<T extends keyof StringConvertibleTypesDict>(
    element: Element,
    name: string,
    type: T
): NullOr<StringConvertibleTypesDict[T]>;

/**
 * Get the attribute from an element, optionally converting it to another type.
 * If the attribute doesn't exist then null is returned instead.
 * @since 0.2.0
 *
 * @param {Element} element The element to retrieve the attribute from.
 * @param {string} name The name of the attribute.
 * @param {boolean|number} [type] The type to convert the value to.
 *
 * @returns {null|string|T}
 */
function getAttribute(element: Element, name: string, type?: string): unknown {
    // Attempt to retrieve the attribute.
    const value = element.getAttribute(name);

    // If the value is defined either return it as-is or, if a type has been
    // specified, convert it first. If no attribute was found then return null.
    return value ? (type ? convertStringToType(value, type) : value) : null;
}

export { getAttribute };
