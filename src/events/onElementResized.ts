/**
 * An optional configuration object for `onElementResized`.
 *
 * @public
 */
type OnElementResizedOptions = {
    /**
     * An `AbortSignal` that can be used to cancel the observer.
     */
    signal?: AbortSignal;
};

/**
 * The object returned in the callback for `onElementResized`.
 *
 * @public
 */
type OnElementResizedInfo<T extends Element> = {
    /**
     * The element being observed.
     */
    element: T;
    /**
     * The border box size. See {@link https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model | What is the CSS box model} for more information.
     */
    borderBoxSize: ResizeObserverSize;
    /**
     * The content box size. See {@link https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model | What is the CSS box model} for more information.
     */
    contentBoxSize: ResizeObserverSize;
};

/**
 * Create an observer that will fire a callback whenever an element is resized.
 *
 * @remarks
 * Uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API | Resize Observer API} internally.
 *
 * Note that, natively, both `borderBoxSize` and `contentBoxSize` return arrays.
 * This is due to rare cases where an observed element has multiple fragments,
 * such as in a multi-column scenario. Since this is so rare, and for the sake
 * of convenience, the first (and usually only) size object is returned.
 *
 * @param element - The element to observe.
 * @param callback - The function to call when the element is resized.
 * @param options - An optional configuration object.
 *
 * @example
 * Wait for an element to be resized.
 * ```ts
 * onElementResized(element, (info) => {
 *     // Element was resized.
 *     console.log(`Element is ${info.borderBoxSize.blockSize}px in height.`);
 * });
 * ```
 *
 * @public
 */
function onElementResized<T extends Element>(
    element: T,
    callback: (info: OnElementResizedInfo<T>) => void,
    options?: OnElementResizedOptions,
): void {
    const { signal } = { ...options };

    if (signal?.aborted) return;

    const observer = new ResizeObserver(([entry]) =>
        callback({
            element,
            borderBoxSize: entry.borderBoxSize[0],
            contentBoxSize: entry.contentBoxSize[0],
        }),
    );

    observer.observe(element);
    signal?.addEventListener('abort', observer.disconnect);
}

export {
    onElementResized,
    type OnElementResizedInfo,
    type OnElementResizedOptions,
};
