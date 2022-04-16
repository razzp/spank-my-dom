import type { CacheItem } from '../interfaces/CacheItem';

/**
 * The cache stores information about delegate event listeners so that they can
 * be safely removed in the future. Items are grouped by event target.
 * @private
 */
const delegateCache: WeakMap<EventTarget, Set<CacheItem>> = new WeakMap();

export { delegateCache };
