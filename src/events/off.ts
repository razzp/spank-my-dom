import type { EventMapFor } from './delegate/aliases/EventMapFor';
import type { ListenerOrListenerObjFor } from './aliases/ListenerOrListenerObjFor';

/**
 * Remove an event listener from the target.
 */
function off<
    TTarget extends EventTarget,
    TEventMap extends EventMapFor<TTarget>,
    TEventType extends keyof TEventMap
>(
    target: TTarget,
    type: TEventType,
    listener: ListenerOrListenerObjFor<TTarget, TEventMap, TEventType>,
    options?: boolean | AddEventListenerOptions
): void;

function off(
    target: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
): void {
    target.removeEventListener(type, listener, options);
}

export { off };