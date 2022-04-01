import type { CacheItem } from '../interfaces/CacheItem';

type DelegateCache = WeakMap<EventTarget, Set<CacheItem>>;

/**
 * The cache stores information about delegate event listeners so that they can
 * be safely removed in the future.
 */
const delegateCache: DelegateCache = new WeakMap();

export { delegateCache };
