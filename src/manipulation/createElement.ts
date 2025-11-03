/**
 * Creates a new element, allowing you to define properties
 * and child nodes at the same time.
 *
 * @param tagName - The type of element to create.
 * @param options - Optional arguments (TODO).
 *
 * @public
 */
function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: ElementCreationOptions & {
        content?: string;
        attributes?: {
            [A in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][A];
        };
        classes?: string[];
        styles?: { [key: string]: string };
        data?: { [key: string]: unknown };
        append?: Node[];
        prepend?: Node[];
    },
): HTMLElementTagNameMap[T] {
    const { content, attributes, classes, styles, data, append, prepend } = {
        ...options,
    };

    const element = document.createElement(tagName, options);

    if (content && content.trim() !== '') {
        element.innerHTML = content;
    }

    if (attributes) {
        Object.assign(element, attributes);
    }

    if (styles) {
        Object.assign(element.style, styles);
    }

    if (data) {
        Object.assign(element.dataset, data);
    }

    if (classes) {
        for (const token of classes.filter((x) => x.trim() !== '')) {
            element.classList.add(token);
        }
    }

    if (append) {
        element.append(...append);
    }

    if (prepend) {
        element.prepend(...prepend);
    }

    return element;
}

export { createElement };
