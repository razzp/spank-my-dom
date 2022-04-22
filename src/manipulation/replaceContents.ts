import { emptyElement } from './emptyElement';

import type { Replacement } from './aliases/Replacement';

/**
 * Replace the contents of an element with one or more items.
 * @since 0.2.0
 *
 * @param {Element} element The element to replace the contents of.
 * @param {Array.<Node,string>} replacements The new items to insert into the element.
 *
 * @returns {void}
 */
function replaceContents(
    element: Element,
    ...replacements: Replacement[]
): void {
    // Empty the element.
    emptyElement(element);

    for (const replacement of replacements) {
        if (replacement instanceof Node) {
            // Replacement is a Node. Append it to the element.
            element.appendChild(replacement);
        } else if (typeof replacement === 'string') {
            // Replacement is a string (presumably HTML). Insert it at the end
            // of the element.
            element.insertAdjacentHTML('beforeend', replacement);
        }
    }
}

export { replaceContents };
