// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeAll, describe, expect, test } from 'vitest';
import { findClosest } from '../../src/traversal/findClosest';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="foo ancestor">
            <div>
                <div>
                    <div class="target foo self"></div>
                </div>
            </div>
        </div>
    `;
});

describe('Non-inclusive of self', () => {
    test('Given a selector that matches an ancestor, returns that element', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = findClosest(target, '.foo', true);

        expect(result).toBeDefined();
        expect(result?.classList.contains('ancestor')).toBe(true);
    });

    test('Given a selector that does not match any ancestors, returns null', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        expect(findClosest(target, '.bar')).toBeNull();
    });

    test('Given an element which does not have a parent element, returns null', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        // Brute force the `parentElement` property to undefined
        // so that we can test the optional chaining logic.
        Object.defineProperty(target, 'parentElement', {
            value: undefined,
        });

        expect(findClosest(target, '.bar', true)).toBeNull();
    });
});

describe('Inclusive of self', () => {
    test('Given a selector that matches the provided element, returns element', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = findClosest(target, '.foo', false);

        expect(result).toBeDefined();
        expect(result?.classList.contains('self')).toBe(true);
    });
});
