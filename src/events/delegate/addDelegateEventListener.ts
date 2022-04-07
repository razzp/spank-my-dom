import { delegateCache } from './internal/delegateCache';
import { delegateFactory } from './internal/delegateFactory';
import { sanitiseOptions } from './internal/sanitiseOptions';
import { removeDelegateEventListener } from './removeDelegateEventListener';

import type { CacheItem } from './interfaces/CacheItem';
import type { EventMapFor } from '../aliases/EventMapFor';
import type { DelegateListenerOrListenerObjFor } from './aliases/DelegateListenerOrListenerObjFor';
import type { DelegateListenerOrListenerObj } from './aliases/DelegateListenerOrListenerObj';

/**
 * Add a delegate event listener to the target. The callback argument will be
 * invoked when the event is dispatched on any descendant element that matches
 * the given selectors.
 *
 * @param target The target to add the listener to.
 * @param selectors The selectors to match against when an event is dispatched.
 * @param type The listener type.
 * @param listener The listener callback.
 * @param options The listener options.
 */
function addDelegateEventListener<
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

function addDelegateEventListener(
    target: EventTarget,
    selectors: string,
    type: string,
    listener: DelegateListenerOrListenerObj,
    options?: boolean | AddEventListenerOptions
): void {
    // Get the cache associated with the target (it may not exist yet).
    const targetCache = delegateCache.get(target);

    // Create a sanitised collection of options.
    const optionsSanitised = sanitiseOptions(options);

    // Create a function that can be used to remove the delegate listener.
    // This may be used in the following scenarios:
    // 1. An attached `AbortController` is aborted.
    // 2. Option `once` is set to true and we're cleaning up.
    const remove = () =>
        removeDelegateEventListener(target, selectors, type, listener, options);

    // Build a model of properties we can use at a later date to identify
    // and remove a delegate event listener, should we need to.
    const cacheItem: CacheItem = {
        delegate: delegateFactory(
            selectors,
            listener,
            optionsSanitised.origOnce ? remove : undefined
        ),
        listener,
        options: optionsSanitised,
        remove,
        selectors,
        type,
    };

    // If an `AbortSignal` is attached then listen for its `abort` event.
    // This will only need to be caught once.
    optionsSanitised.origSignal?.addEventListener('abort', remove, {
        once: true,
    });

    if (targetCache) {
        // Push the item to the cache.
        targetCache.add(cacheItem);
    } else {
        // The cache doesn't exist, so create it first.
        delegateCache.set(target, new Set([cacheItem]));
    }

    // Add the listener to the target.
    target.addEventListener(type, cacheItem.delegate, optionsSanitised);
}

export { addDelegateEventListener };
