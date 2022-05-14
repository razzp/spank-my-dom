import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { getClassesStartingWith } from '../../src/classes/getClassesStartingWith';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target pre-foo bar"></div>
            `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const result = getClassesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux'
        );

        expect(result).toEqual(['pre-foo', 'pre-baz']);
    });

    test('Case-insensitive search for classes starting with value', () => {
        const result = getClassesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux',
            true
        );

        expect(result).toEqual(['pre-foo', 'pre-baz', 'PRE-qux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const result = getClassesStartingWith('pre-', 'foo bar');

        expect(result).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const target = guarantee(document.querySelector('.target'));
        const result = getClassesStartingWith('pre-', target);

        expect(result).toEqual(['pre-foo']);
    });
});
