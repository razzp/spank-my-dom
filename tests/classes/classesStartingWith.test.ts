/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { classesStartingWith } from '../../src/classes/classesStartingWith';

beforeEach(() => {
    document.body.innerHTML = '<div class="target pre-foo bar"></div>';
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const result = classesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux',
        );

        expect(result).toEqual(['pre-foo', 'pre-baz']);
    });

    test('Case-insensitive search for classes starting with value', () => {
        const result = classesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux',
            true,
        );

        expect(result).toEqual(['pre-foo', 'pre-baz', 'PRE-qux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const result = classesStartingWith('pre-', 'foo bar');

        expect(result).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = classesStartingWith('pre-', target);

        expect(result).toEqual(['pre-foo']);
    });
});
