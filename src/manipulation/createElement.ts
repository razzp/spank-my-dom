interface ElementOptions {
    attributes?: Record<string, string>;
    classes?: string[];
    children?: Element[];
    innerHTML?: string;
}

/**
 * Creates an instance of the element for the specified tag, allowing you to
 * define attributes and content at the same time.
 *
 * @param tagName The name of an element.
 * @param options Additional options.
 */
function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: ElementOptions
): HTMLElementTagNameMap[T] {
    // Create the new element.
    const newElement = document.createElement(tagName);

    // If there are no additional options then we're done.
    if (!options) return newElement;

    // Ensure we have an attributes object.
    const attributes = options.attributes ?? {};

    if (options.classes) {
        // Concatenate classes and add to the attributes object.
        attributes.class = options.classes.join(' ');
    }

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
        newElement.setAttribute(name, value);
    }

    // Return the element.
    return newElement;
}

export { createElement };
