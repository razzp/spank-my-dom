import { delegateCache } from './internal/delegateCache';
import { findItemInCache } from './internal/findItemInCache';
import { sanitiseOptions } from './internal/sanitiseOptions';

import type { DelegateListenerOrListenerObj } from './aliases/DelegateListenerOrListenerObj';
import type { DelegateListenerOrListenerObjFor } from './aliases/DelegateListenerOrListenerObjFor';

/**
 * Remove a delegate listener from the target.
 *
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to remove the listener from.
 * @param {string} selectors The selectors that would have been matched against.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function removeDelegateEventListener<T extends Event | CustomEvent = Event>(
    target: EventTarget,
    selectors: string,
    type: string,
    listener: DelegateListenerOrListenerObjFor<T>,
    options?: boolean | AddEventListenerOptions
): void {
    // Get the cache associated with the target.
    const targetCache = delegateCache.get(target);

    // If the cache doesn't exist then bail out.
    if (!targetCache) return;

    // Create a sanitised collection of options.
    const optionsSanitised = sanitiseOptions(options);

    // Find the item in the cache.
    const itemToRemove = findItemInCache(targetCache, {
        options: optionsSanitised,
        listener: listener as DelegateListenerOrListenerObj,
        selectors,
        type,
    });

    // If no item was found then bail out.
    if (!itemToRemove) return;

    // If an `AbortSignal` exists then stop listening.
    itemToRemove.options.origSignal?.removeEventListener(
        'abort',
        itemToRemove.remove
    );

    // Remove the event listener.
    target.removeEventListener(
        type,
        itemToRemove.delegate,
        itemToRemove.options
    );

    // Remove the item from the cache.
    targetCache.delete(itemToRemove);

    // If the cache is now empty then remove it entirely.
    !targetCache.size && delegateCache.delete(target);
}

export { removeDelegateEventListener };
