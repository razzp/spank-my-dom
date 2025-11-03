/**
 * Create a delegate listener that fires on elements that match the
 * provided selectors, as the event bubbles up through the DOM.
 *
 * @param selectors - One or more selectors to match.
 * @param callback - The function called for each delegate match.
 *
 * @public
 */
function delegate<T extends EventTarget, U extends Event | CustomEvent>(
    selectors: string,
    callback: (
        this: T,
        data: { delegateTarget: Element; event: U; stopDelegation: () => void },
    ) => unknown,
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

export { delegate };
