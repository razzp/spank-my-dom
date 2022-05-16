import type { ListenerFor } from './aliases/ListenerFor';

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
function removeEventListener<T extends Event | CustomEvent = Event>(
    target: EventTarget,
    type: string,
    listener: ListenerFor<T>,
    options?: boolean | AddEventListenerOptions
): void {
    target.removeEventListener(
        type,
        listener as EventListenerOrEventListenerObject,
        options
    );
}

export { removeEventListener };
