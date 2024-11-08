type CreateElementOptions = ElementCreationOptions & {
    children?: Node[];
    namespace?: string;
    props?: { [key: string]: unknown };
};

/**
 * Creates an instance of the element for the specified tag, allowing you to
 * define attributes and child nodes at the same time.
 * @since 2.0.0
 */
function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: CreateElementOptions,
): HTMLElementTagNameMap[T] {
    const { children, namespace, props } = { ...options };

    const element = namespace
        ? document.createElementNS(namespace, tagName, options)
        : document.createElement(tagName, options);

    if (props) {
        for (const [key, value] of Object.entries(props)) {
            element.setAttribute(
                key,
                key === 'class' && Array.isArray(value)
                    ? value.join(' ')
                    : String(value),
            );
        }
    }

    if (children) {
        element.append(...children);
    }

    return element as HTMLElementTagNameMap[T];
}

export { createElement };

// TODO: JSDOC