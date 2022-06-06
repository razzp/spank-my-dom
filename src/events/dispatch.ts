import type { DispatchEventOptions } from './interfaces/DispatchEventOptions';

/**
 * Dispatch a synthetic event to a target.
 * @since 1.0.0
 *
 * @param {EventTarget} target The target to dispatch the event to.
 * @param {string} type The name of the event.
 * @param {CustomEventInit|EventInit} [options] Additional event properties.
 *
 * @returns {boolean} `false` if `event` is cancelable, and at least one of the event
 * handlers which received `event` called `preventDefault()`. Otherwise `true`.
 */
function dispatch(
    target: EventTarget,
    type: string,
    options?: DispatchEventOptions
): boolean {
    const event =
        typeof options?.detail !== 'undefined'
            ? // A `detail` property has been defined. This is a custom event.
              new CustomEvent(type, options)
            : // This is a normal event.
              new Event(type, options);

    // Dispatch the event.
    return target.dispatchEvent(event);
}

export { dispatch };
