import type { CacheItemComparable } from '../aliases/CacheItemComparable';

/**
 * Check if two `CacheItem` instances match.
 */
function cacheItemsMatch(
    itemA: CacheItemComparable,
    itemB: CacheItemComparable
): boolean {
    // Each listener has the potential to be either a direct function, or a
    // function nested in the `handleEvent` property of a listener object.
    const [listenerA, listenerB] = [itemA.listener, itemB.listener].map(
        (listener) =>
            'handleEvent' in listener ? listener.handleEvent : listener
    );

    // Compare the properties we care about and return the result.
    return (
        listenerA === listenerB &&
        itemA.options.capture === itemB.options.capture &&
        itemA.selector === itemB.selector &&
        itemA.type === itemB.type
    );
}

export { cacheItemsMatch };
