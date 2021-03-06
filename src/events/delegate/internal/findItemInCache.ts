import { cacheItemsMatch } from './cacheItemsMatch';

import type { CacheItemComparable } from '../aliases/CacheItemComparable';
import type { CacheItem } from '../interfaces/CacheItem';

/**
 * Find a matching item in a given cache.
 * @private
 */
function findItemInCache(
    cache: Set<CacheItem>,
    item: CacheItemComparable
): undefined | CacheItem {
    return [...cache.values()].find((cacheItem) =>
        cacheItemsMatch(cacheItem, item)
    );
}

export { findItemInCache };
