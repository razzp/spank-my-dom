/**
 * The event data returned in the callback.
 *
 * @public
 */
interface DelegateEvent<T> {
    /**
     * The target that has been matched.
     */
    delegateTarget: Element;
    /**
     * The original Event object.
     *
     * @remarks
     * Be aware that `currentTarget` will be `null`.
     * See: {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget}
     */
    event: T;
    /**
     * Stop any further matches as the event bubbles.
     */
    stopDelegation: () => void;
}

/**
 * Create a delegate listener that fires on elements that match the
 * provided selectors, as the event bubbles up through the DOM.
 *
 * @param selectors - One or more selectors to match.
 * @param callback - The function called for each delegate match.
 *
 * @example
 * Do something with a matched element.
 * ```ts
 * document.addEventListener('click', delegate('.foo', ({ delegateTarget }) => {
 *     console.log(delegateTarget);
 * }));
 * ```
 *
 * @example
 * Stop delegation if there are multiple matches within the event bubble
 * that you don't want to trigger callbacks for.
 * ```ts
 * document.addEventListener('click', delegate('.foo', ({ stopDelegation }) => {
 *     if (condition) {
 *         stopDelegation();
 *     }
 * }));
 * ```
 *
 * @public
 */
function delegate<T extends EventTarget, U extends Event | CustomEvent>(
    selectors: string,
    callback: (this: T, delegateEvent: DelegateEvent<U>) => unknown,
) {
    return function (this: T, event: U) {
        let current = event.target;
        let stopped = false;

        while (
            !stopped &&
            current instanceof Element &&
            current !== event.currentTarget
        ) {
            if (current.matches(selectors)) {
                callback.call(this, {
                    delegateTarget: current,
                    event,
                    stopDelegation: () => {
                        stopped = true;
                    },
                });
            }

            current = current.parentElement;
        }
    };
}

export { delegate, type DelegateEvent };
