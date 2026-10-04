/**
 * An optional configuration object for `onElementResized`.
 *
 * @public
 */
interface OnElementResizedOptions {
    /**
     * An `AbortSignal` that can be used to cancel the observer.
     */
    signal?: AbortSignal;
}

/**
 * The object returned in the callback for `onElementResized`.
 *
 * @public
 */
interface OnElementResizedInfo<T extends Element> {
    /**
     * The element being observed.
     */
    element: T;
    /**
     * The observer entry. See {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry | MDN} for more information.
     */
    entry: ResizeObserverEntry;
}

/**
 * Create an observer that will fire a callback whenever an element is resized.
 *
 * @remarks
 * Uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API | Resize Observer API} internally.
 *
 * @param element - The element to observe.
 * @param callback - The function to call when the element is resized.
 * @param options - An optional configuration object.
 *
 * @example
 * Wait for an element to be resized.
 * ```ts
 * onElementResized(element, ({entry}) => {
 *     // Element was resized.
 *     console.log(`Element is ${entry.borderBoxSize.blockSize}px in height.`);
 * });
 * ```
 *
 * @public
 */
function onElementResized<T extends Element>(
    element: T,
    callback: (data: OnElementResizedInfo<T>) => void,
    options?: OnElementResizedOptions,
): void {
    const { signal } = { ...options };

    if (signal?.aborted) return;

    const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            callback({ element, entry });
        }
    });

    observer.observe(element);
    signal?.addEventListener('abort', observer.disconnect);
}

export {
    onElementResized,
    type OnElementResizedOptions,
    type OnElementResizedInfo,
};
