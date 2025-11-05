/**
 * An optional configuration object for `createElement`.
 *
 * @public
 */
type CreateElementOptions<T extends keyof HTMLElementTagNameMap> =
    ElementCreationOptions & {
        /**
         * Sets the `innerHTML` of the element.
         */
        content?: string;
        /**
         * Attributes to add to the element.
         */
        attributes?: {
            [A in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][A];
        };
        /**
         * Classes to add to the element.
         */
        classes?: string[];
        /**
         * Styles to add to the element.
         */
        styles?: { [key: string]: string };
        /**
         * Data to add to the element.
         */
        data?: { [key: string]: unknown };
        /**
         * Nodes to append to the element.
         */
        append?: Node[];
        /**
         * Nodes to prepend to the element.
         */
        prepend?: Node[];
    };

/**
 * Creates a new element, allowing you to define properties
 * and child nodes at the same time.
 *
 * @param tagName - The type of element to create.
 * @param options - An optional configuration object.
 *
 * @public
 */
function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: CreateElementOptions<T>,
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

export { createElement, type CreateElementOptions };
