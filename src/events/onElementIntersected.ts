/**
 * An optional configuration object for `onElementIntersected`.
 *
 * @public
 */
interface OnElementIntersectedOptions
    extends Omit<IntersectionObserverInit, 'threshold'> {
    /**
     * An `AbortSignal` that can be used to cancel the observer.
     */
    signal?: AbortSignal;
}

/**
 * The object returned in the callback for `onElementIntersected`.
 *
 * @public
 */
interface OnElementIntersectedInfo<T extends Element> {
    /**
     * The element being observed.
     */
    element: T;
    /**
     * How much of the element is currently visible within the root's
     * intersection ratio, as a value between 0.0 and 1.0.
     */
    intersectionRatio: number;
    /**
     * Boolean value which is true if the element intersects
     * with the intersection observer's root.
     */
    isIntersecting: boolean;
}

/**
 * Create an observer that will fire a callback whenever
 * an element intersects a root element.
 *
 * @remarks
 * Uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API | Intersection Observer API} internally.
 *
 * @param threshold - The threshold at which the callback should be fired.
 * @param element - The element to observe.
 * @param callback - The function to call when the element intersects.
 * @param options - An optional configuration object.
 *
 * @example
 * Wait for an element to intersect the root (default) completely.
 * ```ts
 * onElementIntersected('completely', element, (info) => {
 *     if (info.isIntersecting) {
 *         console.log('Element has completely entered the viewport');
 *     } else {
 *         console.log('Element has completely left the viewport');
 *     }
 * });
 * ```
 *
 * @example
 * Wait for an element to intersect the root (default) partially.
 * ```ts
 * onElementIntersected('partially', element, (info) => {
 *     if (info.isIntersecting) {
 *         console.log('Element has partially entered the viewport');
 *     } else {
 *         console.log('Element has partially left the viewport');
 *     }
 * });
 * ```
 *
 * @public
 */
function onElementIntersected<T extends Element>(
    threshold: 'completely' | 'partially' | number | number[],
    element: T,
    callback: (info: OnElementIntersectedInfo<T>) => void,
    options?: OnElementIntersectedOptions,
): void {
    const { signal } = { ...options };

    if (signal?.aborted) return;

    const observer = new IntersectionObserver(
        ([entry]) =>
            callback({
                element,
                intersectionRatio: entry.intersectionRatio,
                isIntersecting: entry.isIntersecting,
            }),
        {
            ...options,
            threshold: (() => {
                switch (threshold) {
                    case 'completely':
                        return 1;
                    case 'partially':
                        return 0;
                    default:
                        return threshold;
                }
            })(),
        },
    );

    observer.observe(element);
    signal?.addEventListener('abort', observer.disconnect);
}

export {
    onElementIntersected,
    type OnElementIntersectedInfo,
    type OnElementIntersectedOptions,
};
