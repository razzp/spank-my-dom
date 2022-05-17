import type { CreateElementOptions } from './interfaces/CreateElementOptions';

/**
 * Creates an instance of the element for the specified tag, allowing you to
 * define attributes and content at the same time.
 * @since 0.3.0
 *
 * @param {string} tagName The type of element to be created.
 * @param {Object} [options] Additional options.
 * @param {Object.<string, string|number|boolean>} [options.attributes] Attributes to be added to the element.
 * @param {Element[]} [options.children] Child elements to append to the element.
 * @param {string} [options.innerHTML] Set the HTML of the element.
 *
 * @returns {Element}
 */
function create<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: CreateElementOptions
): HTMLElementTagNameMap[T] {
    // Create the new element.
    const newElement = document.createElement(tagName);

    // If there are no additional options then we're done.
    if (!options) return newElement;

    // Ensure we have an attributes object.
    const attributes = options.attributes ?? {};

    if (options.innerHTML) {
        // Append any content to the element.
        newElement.innerHTML = options.innerHTML;
    }

    if (options.children) {
        // Append any children to the element.
        newElement.append(...options.children);
    }

    for (const [name, value] of Object.entries(attributes)) {
        // Set each attribute on the element.
        newElement.setAttribute(name, String(value));
    }

    // Return the element.
    return newElement;
}

export { create };
