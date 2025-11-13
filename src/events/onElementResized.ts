/**
 * An optional configuration object for `onElementResized`.
 *
 * @public
 */
type OnElementResizedOptions = {
    /**
     * The CSS box model to use. This defaults to `borderBox`.
     * See {@link https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model | MDN}.
     */
    boxModel?: 'borderBox' | 'contentBox';
    /**
     * An `AbortSignal` that can be used to cancel the observer.
     */
    signal?: AbortSignal;
};

/**
 * Create an observer that will fire a callback whenever an element is resized.
 *
 * @remarks
 * By default, the CSS box model `borderBox` is used.
 * This can be configured via the `options` argument.
 * See {@link https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model | MDN}.
 *
 * @param element - The element to observe.
 * @param callback - The function to call when the element is resized.
 * @param options - An optional configuration object.
 *
 * @public
 */
function onElementResized(
    element: Element,
    callback: (size: ResizeObserverSize) => void,
    options?: OnElementResizedOptions,
): void {
    const { boxModel, signal } = { ...options };

    const boxModelProp =
        boxModel === 'contentBox' ? 'contentBoxSize' : 'borderBoxSize';

    if (signal?.aborted) return;

    const observer = new ResizeObserver((entries) =>
        callback(entries[0][boxModelProp][0]),
    );

    observer.observe(element);
    signal?.addEventListener('abort', observer.disconnect);
}

export { onElementResized, type OnElementResizedOptions };
