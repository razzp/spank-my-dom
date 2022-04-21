import type { Serialisable } from '../aliases/Serialisable';

/**
 * Given a serialisable item, convert it to an array of key/value pairs.
 * @private
 */
function asKeyValuePairs(item: Serialisable): [string, unknown][] {
    if (item instanceof HTMLFormElement) {
        return [...new FormData(item).entries()];
    }

    if (Array.isArray(item)) {
        // Filter members that are key/value pairs.
        return item.filter(
            (member) => Array.isArray(member) && member.length === 2
        );
    }

    if (item && typeof item === 'object') {
        return Object.entries(item);
    }

    // Input not recognised; return an empty array.
    return [];
}

export { asKeyValuePairs };
