/**
 * An optional configuration object for `onElementAdded`.
 *
 * @public
 */
type OnElementAddedOptions = {
    /**
     * The context from which to observe from (defaults to `document`)
     */
    context?: Document | DocumentFragment | Element;
    /**
     * One or more selectors to match on the observed elements.
     */
    selectors?: string;
    /**
     * An `AbortSignal` that can be used to cancel the observer.
     */
    signal?: AbortSignal;
};

/**
 * Create an observer that will wait for specific elements to be
 * added to the DOM, optionally filtered by CSS selectors.
 *
 * @param tagName - The type of element to observe for.
 * @param callback - The function called for added elements.
 * @param options - An optional configuration object.
 *
 * @public
 */
function onElementAdded<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    callback: (element: HTMLElementTagNameMap[T]) => void,
    options?: OnElementAddedOptions,
): void {
    const { context, selectors, signal } = {
        context: document,
        ...options,
    };

    if (signal?.aborted) return;

    const tagNameLower = tagName.toLowerCase();

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (
                    node instanceof Element &&
                    node.tagName.toLowerCase() === tagNameLower &&
                    (!selectors || node.matches(selectors))
                ) {
                    callback(node as HTMLElementTagNameMap[T]);
                }
            }
        }
    });

    observer.observe(context, { childList: true, subtree: true });
    signal?.addEventListener('abort', observer.disconnect);
}

export { onElementAdded, type OnElementAddedOptions };
