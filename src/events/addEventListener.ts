import type { ListenerOrListenerObjFor } from './aliases/ListenerOrListenerObjFor';

/**
 * Add an event listener to the target.
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function addEventListener<T extends Event | CustomEvent = Event>(
    target: EventTarget,
    type: string,
    listener: ListenerOrListenerObjFor<T>,
    options?: boolean | AddEventListenerOptions
): void {
    target.addEventListener(
        type,
        listener as EventListenerOrEventListenerObject,
        options
    );
}

export { addEventListener };
