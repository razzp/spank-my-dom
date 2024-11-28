/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { getClasses } from '../../../src/classes/internal/getClasses';

beforeEach(() => {
    document.body.innerHTML = '<div class="target foo fooo FOOOO"></div>';
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes', () => {
        const result = getClasses('foo fooo FOOOO', 'foo+', false);

        expect(result).toEqual(['foo', 'fooo']);
    });

    test('Case-insensitive search for classes containing value', () => {
        const result = getClasses('foo fooo FOOOO', 'foo+', true);

        expect(result).toEqual(['foo', 'fooo', 'FOOOO']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const result = getClasses('', 'foo+', true);

        expect(result).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = getClasses(target, 'foo+', true);

        expect(result).toEqual(['foo', 'fooo', 'FOOOO']);
    });
});
