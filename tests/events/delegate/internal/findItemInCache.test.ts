import { assertIsNotUndefined } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { delegateCache } from '../../../../src/events/delegate/internal/delegateCache';
import { findItemInCache } from '../../../../src/events/delegate/internal/findItemInCache';

import type { CacheItem } from '../../../../src/events/delegate/interfaces/CacheItem';

const noop = () => void 0;

const cacheItem: CacheItem = {
    delegate: noop,
    listener: noop,
    remove: noop,
    options: {},
    selectors: 'foo',
    type: 'foo',
};

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;

    delegateCache.set(document, new Set([cacheItem]));
});

test('Searching for an item that exists yields that item', () => {
    const targetCache = delegateCache.get(document);

    assertIsNotUndefined(targetCache);

    const result = findItemInCache(targetCache, cacheItem);

    expect(result).toBeDefined();
    expect(result).toEqual(cacheItem);
});

test("Searching for an item that doesn't exist returns undefined", () => {
    const targetCache = delegateCache.get(document);

    assertIsNotUndefined(targetCache);

    const result = findItemInCache(targetCache, {
        ...cacheItem,
        selectors: 'bar',
        type: 'bar',
    });

    expect(result).toBeUndefined();
});
