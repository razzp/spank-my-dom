import { delegateCache } from './internal/delegateCache';
import { delegateFactory } from './internal/delegateFactory';
import { findItemInCache } from './internal/findItemInCache';
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
 * The `Event` object returned in the listener callback includes a non-standard
 * method `stopDelegation()`, which stops any further traversal up the DOM tree
 * in search of matches.
 *
 * The listener callback includes a second argument `index`, which indicates
 * how many times the callback has been fired during the current event.
 *
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} selectors The selectors to match against when an event is dispatched.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
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

/**
 * Add a delegate event listener to the target. The callback argument will be
 * invoked when the event is dispatched on any descendant element that matches
 * the given selectors.
 *
 * The `Event` object returned in the listener callback includes a non-standard
 * method `stopDelegation()`, which stops any further traversal up the DOM tree
 * in search of matches.
 *
 * The listener callback includes a second argument `index`, which indicates
 * how many times the callback has been fired during the current event.
 *
 * @since 0.1.0
 *
 * @param {EventTarget} target The target to add the listener to.
 * @param {string} selectors The selectors to match against when an event is dispatched.
 * @param {string} type The listener type.
 * @param {EventListener|EventListenerObject} listener The listener callback.
 * @param {boolean|AddEventListenerOptions} [options] The listener options.
 *
 * @returns {void}
 */
function addDelegateEventListener(
    target: EventTarget,
    selectors: string,
    type: string,
    listener: DelegateListenerOrListenerObj,
    options?: boolean | AddEventListenerOptions
): void {
    // Get the cache associated with the target.
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

    if (targetCache) {
        if (findItemInCache(targetCache, cacheItem)) {
            // If an effectively identical listener has already been added
            // to this target's cache, then bail out. As per the spec we
            // won't add the same listener twice.
            return;
        }

        // Push the item to the cache.
        targetCache.add(cacheItem);
    } else {
        // The cache doesn't exist, so create it first.
        delegateCache.set(target, new Set([cacheItem]));
    }

    // If an `AbortSignal` exists then listen for its `abort` event.
    // This will only need to be caught once.
    optionsSanitised.origSignal?.addEventListener('abort', remove, {
        once: true,
    });

    // Add the listener to the target.
    target.addEventListener(type, cacheItem.delegate, optionsSanitised);
}

export { addDelegateEventListener };
