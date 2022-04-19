import type { EventMapFor } from './aliases/EventMapFor';
import type { ListenerOrListenerObjFor } from './aliases/ListenerOrListenerObjFor';

/**
 * Remove an event listener from the target.
 *
 * @param {EventTarget} target The target to remove the listener from.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 */
function removeEventListener<
    TTarget extends EventTarget,
    TEventMap extends EventMapFor<TTarget>,
    TEventType extends keyof TEventMap
>(
    target: TTarget,
    type: TEventType,
    listener: ListenerOrListenerObjFor<TTarget, TEventMap, TEventType>,
    options?: boolean | AddEventListenerOptions
): void;

/**
 * Remove an event listener from the target.
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to remove the listener from.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function removeEventListener(
    target: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
): void {
    target.removeEventListener(type, listener, options);
}

export { removeEventListener };
