interface ElementOptions {
    attributes?: Record<string, string>;
    classes?: string[];
    children?: Element[];
    innerHTML?: string;
}

function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: ElementOptions
): HTMLElementTagNameMap[T] {
    const newElement = document.createElement(tagName);

    if (!options) return newElement;

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
        newElement.setAttribute(name, value);
    }

    return newElement;
}

export { createElement };
