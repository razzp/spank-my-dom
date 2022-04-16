import { JSDOM } from 'jsdom';

import { delegateCache } from '../../../../src/events/delegate/internal/delegateCache';
import { findItemInCache } from '../../../../src/events/delegate/internal/findItemInCache';

import type { CacheItem } from '../../../../src/events/delegate/interfaces/CacheItem';

const noop = () => void 0;

let cacheItem: CacheItem;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM();

    cacheItem = {
        delegate: noop,
        listener: noop,
        remove: noop,
        options: {},
        selectors: 'foo',
        type: 'foo',
    };

    jsdomDocument = window.document;

    delegateCache.set(jsdomDocument, new Set([cacheItem]));
});

test('Searching for an item that exists yields that item', () => {
    const targetCache = delegateCache.get(jsdomDocument);

    if (!targetCache) {
        throw new Error('Target cache not found');
    }

    const result = findItemInCache(targetCache, cacheItem);

    expect(result).toBeDefined();
    expect(result).toEqual(cacheItem);
});

test("Searching for an item that doesn't exist returns undefined", () => {
    const targetCache = delegateCache.get(jsdomDocument);

    if (!targetCache) {
        throw new Error('Target cache not found');
    }

    const result = findItemInCache(targetCache, {
        ...cacheItem,
        selectors: 'bar',
        type: 'bar',
    });

    expect(result).toBeUndefined();
});
