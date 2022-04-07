import { cacheItemsMatch } from '../../../../src/events/delegate/internal/cacheItemsMatch';

import type { CacheItemComparable } from '../../../../src/events/delegate/aliases/CacheItemComparable';

describe('Comparing two `CacheItem` instances', () => {
    let cacheItem: CacheItemComparable;
    let noop: () => void;

    beforeEach(() => {
        noop = () => {
            /* noop */
        };

        cacheItem = {
            listener: noop,
            options: {},
            selectors: '',
            type: '',
        };
    });

    test('Identical instances successfully match', () => {
        expect(cacheItemsMatch(cacheItem, cacheItem)).toBe(true);

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

    test('Instances with differing props do not match', () => {
        expect(
            cacheItemsMatch(cacheItem, {
                ...cacheItem,
                listener: () => {
                    /* noop */
                },
            })
        ).toBe(false);

        expect(
            cacheItemsMatch(cacheItem, {
                ...cacheItem,
                listener: {
                    handleEvent: () => {
                        /* noop */
                    },
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
});
