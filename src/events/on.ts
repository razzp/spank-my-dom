import type { ListenerFor } from './aliases/ListenerFor';

/**
 * Add an event listener to the target.
 * @since 1.0.0
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function on<T extends Event | CustomEvent = Event>(
    target: EventTarget,
    type: string,
    listener: ListenerFor<T>,
    options?: boolean | AddEventListenerOptions
): void {
    target.addEventListener(
        type,
        listener as EventListenerOrEventListenerObject,
        options
    );
}

export { on };
