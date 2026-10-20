/**
 * The event data returned in the callback.
 */
interface DelegateEvent<T, E> {
    /**
     * The target that has been matched.
     */
    delegateTarget: T;
    /**
     * The original Event object.
     *
     * @remarks
     * Be aware that `currentTarget` will be `null`.
     * See: {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget}
     */
    originalEvent: E;
    /**
     * Stop any further matches as the event bubbles.
     */
    stopDelegation: () => void;
}

/**
 * Create a delegate listener that fires on elements that match the
 * provided selectors, as the event bubbles up through the DOM.
 *
 * @group Events
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
 */
function delegate<
    K extends keyof HTMLElementTagNameMap,
    E extends Event | CustomEvent,
>(
    selectors: K,
    callback: (event: DelegateEvent<HTMLElementTagNameMap[K], E>) => void,
): (event: E) => void;
function delegate<
    K extends keyof MathMLElementTagNameMap,
    E extends Event | CustomEvent,
>(
    selectors: K,
    callback: (event: DelegateEvent<MathMLElementTagNameMap[K], E>) => void,
): (event: E) => void;
function delegate<
    K extends keyof SVGElementTagNameMap,
    E extends Event | CustomEvent,
>(
    selectors: K,
    callback: (event: DelegateEvent<SVGElementTagNameMap[K], E>) => void,
): (event: E) => void;
function delegate<T extends Element, E extends Event | CustomEvent>(
    selectors: string,
    callback: (event: DelegateEvent<T, E>) => void,
): (event: E) => void;
function delegate(
    selectors: string,
    callback: (event: DelegateEvent<Element, Event | CustomEvent>) => void,
): (event: Event | CustomEvent) => void {
    return (event) => {
        let currentTarget = event.target;
        let stopped = false;

        while (
            !stopped &&
            currentTarget instanceof Element &&
            currentTarget !== event.currentTarget
        ) {
            if (currentTarget.matches(selectors)) {
                callback({
                    delegateTarget: currentTarget,
                    originalEvent: event,
                    stopDelegation: () => {
                        stopped = true;
                    },
                });
            }

            currentTarget = currentTarget.parentElement;
        }
    };
}

export { delegate, type DelegateEvent };
