import { arrayFrom } from '../../array/arrayFrom';
import { cacheItemsMatch } from './internal/cacheItemsMatch';
import { delegateCache } from './internal/delegateCache';
import { sanitiseOptions } from './internal/sanitiseOptions';

import type { CacheItemComparable } from './aliases/CacheItemComparable';
import type { EventMapFor } from '../aliases/EventMapFor';
import type { DelegateListenerOrListenerObjFor } from './aliases/DelegateListenerOrListenerObjFor';
import type { DelegateListenerOrListenerObj } from './aliases/DelegateListenerOrListenerObj';

/**
 * Remove a delegate listener from the target.
 *
 * @param target The target to remove the listener from.
 * @param selectors The selectors that would have been matched against.
 * @param type The listener type.
 * @param listener The listener callback.
 * @param options The listener options.
 */
function removeDelegateEventListener<
    TTarget extends EventTarget,
    TEventMap extends EventMapFor<TTarget>,
    TEventType extends keyof TEventMap
>(
    target: TTarget,
    selectors: string,
    type: TEventType,
    listener: DelegateListenerOrListenerObjFor<TTarget, TEventMap, TEventType>,
    options?: boolean | AddEventListenerOptions
): void;

function removeDelegateEventListener(
    target: EventTarget,
    selectors: string,
    type: string,
    listener: DelegateListenerOrListenerObj,
    options?: boolean | AddEventListenerOptions
): void {
    // Get the cache associated with the target (it may not exist).
    const targetCache = delegateCache.get(target);

    // If the cache doesn't exist then bail out.
    if (!targetCache) return;

    // Create a sanitised collection of options.
    const optionsSanitised = sanitiseOptions(options);

    // Build a partial representation of a cache item that contains
    // only the properties needed to find a match.
    const itemToRemove: CacheItemComparable = {
        options: optionsSanitised,
        listener,
        selectors,
        type,
    };

    // Find any matches in the cache.
    const matches = arrayFrom(targetCache.values()).filter((item) =>
        cacheItemsMatch(item, itemToRemove)
    );

    for (const item of matches) {
        // Remove abort listener if one exists.
        item.options.origSignal?.removeEventListener('abort', item.remove);

        // Remove the listener.
        target.removeEventListener(type, item.delegate, item.options);

        // Remove the item from the cache.
        targetCache.delete(item);

        // If the cache is now empty then remove it entirely.
        !targetCache.size && delegateCache.delete(target);
    }
}

export { removeDelegateEventListener };
