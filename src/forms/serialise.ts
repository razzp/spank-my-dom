import { asKeyValuePairs } from './internal/asKeyValuePairs';

import type { Serialisable } from './aliases/Serialisable';

/**
 * Encode one or more serialisable items as a query string. This is aimed
 * primarily, but not exclusively, at form elements.
 * @since 0.2.0
 *
 * @param {HTMLFormElement|Object.<string,any>|Array.<Array.<string,any>>} items The item(s) to encode.
 *
 * @returns {string}
 */
function serialise(...items: Serialisable[]): string {
    const params = new URLSearchParams();

    for (const [name, value] of items.flatMap(asKeyValuePairs)) {
        params.append(name, String(value));
    }

    return params.toString();
}

export { serialise };
