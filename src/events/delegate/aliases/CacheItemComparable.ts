import type { CacheItem } from '../interfaces/CacheItem';

type CacheItemComparable = Omit<CacheItem, 'delegate' | 'remove'>;

export { CacheItemComparable };
