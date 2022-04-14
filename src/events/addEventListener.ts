import type { EventMapFor } from './aliases/EventMapFor';
import type { ListenerOrListenerObjFor } from './aliases/ListenerOrListenerObjFor';

/**
 * Add an event listener to the target.
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 */
function addEventListener<
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
 * Add an event listener to the target.
 * @category Events
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function addEventListener(
    target: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
): void {
    target.addEventListener(type, listener, options);
}

export { addEventListener };
