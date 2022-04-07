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

        // Certain `options` props are disregarded when removing an event listener.
        // For all intents and purposes these are identical.
        expect(
            cacheItemsMatch(cacheItem, {
                ...cacheItem,
                options: {
                    passive: true,
                },
            })
        ).toBe(true);

        // If a listener object is provided, we will compare the `handleEvent` prop.
        // If it matches then for all intents and purposes these are identical.
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
