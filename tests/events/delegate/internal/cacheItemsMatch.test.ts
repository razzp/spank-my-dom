import { cacheItemsMatch } from '../../../../src/events/delegate/internal/cacheItemsMatch';

import type { CacheItemComparable } from '../../../../src/events/delegate/aliases/CacheItemComparable';

const noop = () => void 0;

const cacheItem: CacheItemComparable = {
    listener: noop,
    options: {},
    selectors: '',
    type: '',
};

test('Given two instances that are identical, returns `true`', () => {
    expect(cacheItemsMatch(cacheItem, cacheItem)).toBe(true);
});

test('Given two instances that are effectively identical, returns `true`', () => {
    // `passive` property is irrelevant and should not alter result.
    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            options: {
                passive: true,
            },
        })
    ).toBe(true);

    // As long as the values match, a function reference and an object with
    // a `handleEvent` property are considered identical.
    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            listener: {
                handleEvent: noop,
            },
        })
    ).toBe(true);
});

test('Given two instances that are not identical, returns `false`', () => {
    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            listener: () => void 0,
        })
    ).toBe(false);

    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            listener: {
                handleEvent: () => void 0,
            },
        })
    ).toBe(false);

    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            options: {
                capture: true,
            },
        })
    ).toBe(false);

    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            selectors: '.foo',
        })
    ).toBe(false);

    expect(
        cacheItemsMatch(cacheItem, {
            ...cacheItem,
            type: 'click',
        })
    ).toBe(false);
});
