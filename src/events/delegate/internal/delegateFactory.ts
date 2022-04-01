import type { NullOr } from '../../../aliases/NullOr';
import type { DelegateListenerOrListenerObj } from '../aliases/DelegateListenerOrListenerObj';

/**
 * Higher-order function to wrap delegate logic with a listener so that it can
 * be stored in memory and referenced in the future.
 */
function delegateFactory(
    selector: string,
    listener: DelegateListenerOrListenerObj,
    callback?: () => void
) {
    return (event: Event): void => {
        let current = event.target as NullOr<Node>;
        let atLeastOneMatch = false;
        let shouldStop = false;
        let index = 0;

        // Define non-standard property `stopDelegation` on the event object.
        // This can be called to prevent any further traversal up the DOM.
        Object.defineProperty(event, 'stopDelegation', {
            value: () => (shouldStop = true),
        });

        while (
            current &&
            current instanceof Element &&
            current !== event.currentTarget &&
            !shouldStop
        ) {
            // Check if the current element matches the selector query.
            if (current.matches(selector)) {
                // Create a proxy around the event to trap any get request for
                // the `target` property. Return the current element instead.
                const delegateEvent = new Proxy(event, {
                    get(target, property, receiver) {
                        return property === 'target'
                            ? current
                            : Reflect.get(target, property, receiver);
                    },
                });

                // Invoke the listener. We are also passing an index that can
                // be useful if multiple matches are expected.
                'handleEvent' in listener
                    ? listener.handleEvent.call(current, delegateEvent, ++index)
                    : listener.call(current, delegateEvent, ++index);

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
