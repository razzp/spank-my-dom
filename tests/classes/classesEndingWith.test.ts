import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { classesEndingWith } from '../../src/classes/classesEndingWith';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target foo-post bar"></div>
            `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes ending with value', () => {
        const result = classesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST'
        );

        expect(result).toEqual(['foo-post', 'baz-post']);
    });

    test('Case-insensitive search for classes ending with value', () => {
        const result = classesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST',
            true
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
        const target = guarantee(document.querySelector('.target'));
        const result = classesEndingWith('-post', target);

        expect(result).toEqual(['foo-post']);
    });
});
