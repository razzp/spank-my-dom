// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeAll, describe, expect, test } from 'vitest';
import { findClosestOrThrow } from '../../src/traversal/findClosestOrThrow';

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

        const result = findClosestOrThrow(target, '.foo', true);

        expect(result).toBeDefined();
        expect(result?.classList.contains('ancestor')).toBe(true);
    });

    test('Given a selector that does not match any ancestors, throws', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        expect(() => findClosestOrThrow(target, '.bar')).toThrow();
    });

    test('Given an element which does not have a parent element, throws', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        // Brute force the `parentElement` property to undefined
        // so that we can test the optional chaining logic.
        Object.defineProperty(target, 'parentElement', {
            value: undefined,
        });

        expect(() => findClosestOrThrow(target, '.bar', true)).toThrow();
    });
});

describe('Inclusive of self', () => {
    test('Given a selector that matches the provided element, returns element', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = findClosestOrThrow(target, '.foo', false);

        expect(result).toBeDefined();
        expect(result?.classList.contains('self')).toBe(true);
    });
});
