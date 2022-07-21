import type { DelegateListener } from '../aliases/DelegateListener';

/**
 * Higher-order function to wrap delegate logic with a listener so that it can
 * be stored in memory and referenced in the future.
 * @private
 */
function delegateFactory(
    selectors: string,
    listener: DelegateListener,
    callback?: () => void
) {
    return (event: Event): void => {
        let current = event.target as null | Node;
        let atLeastOneMatch = false;
        let stopDelegation = false;

        // Define non-standard property `stopDelegation` on the event object.
        // This can be called to prevent any further traversal up the DOM.
        Object.defineProperty(event, 'stopDelegation', {
            value: () => (stopDelegation = true),
            // Keeps the proxy happy:
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get#invariants
            configurable: true,
        });

        while (
            current &&
            current instanceof Element &&
            current !== event.currentTarget &&
            !stopDelegation
        ) {
            // Check if the current element matches the given selectors.
            if (current.matches(selectors)) {
                // Create a proxy around the event to trap any get request for
                // the `target` property. This ensures that the target which
                // matched the delegate selector is returned.
                const delegateEvent = new Proxy(event, {
                    get(target, property) {
                        switch (property) {
                            case 'target':
                                return current;
                            default: {
                                const value = Reflect.get(target, property);

                                return typeof value === 'function'
                                    ? // We need to re-bind `event` as the scope seems to get lost
                                      // in the proxy which causes illegal invocation errors.
                                      value.bind(event)
                                    : value;
                            }
                        }
                    },
                });

                // Invoke the listener.
                'handleEvent' in listener
                    ? listener.handleEvent.call(current, delegateEvent)
                    : listener.call(current, delegateEvent);

                // Flag that there's been at least one match.
                atLeastOneMatch = true;
            }

            // Traverse up to the next element in the DOM.
            current = current.parentElement;
        }

        // Assuming there has been at least one match, fire the callback.
        atLeastOneMatch && callback?.();
    };
}

export { delegateFactory };
