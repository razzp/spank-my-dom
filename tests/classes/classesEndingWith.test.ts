/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { classesEndingWith } from '../../src/classes/classesEndingWith';

beforeEach(() => {
    document.body.innerHTML = '<div class="target foo-post bar"></div>';
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes ending with value', () => {
        const result = classesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST',
        );

        expect(result).toEqual(['foo-post', 'baz-post']);
    });

    test('Case-insensitive search for classes ending with value', () => {
        const result = classesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST',
            true,
        );

        expect(result).toEqual(['foo-post', 'baz-post', 'qux-POST']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const result = classesEndingWith('-post', 'foo bar');

        expect(result).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const target = document.querySelector('.target');

        assertIsNotNull(target);

        const result = classesEndingWith('-post', target);

        expect(result).toEqual(['foo-post']);
    });
});
