import { DOMWindow, JSDOM } from 'jsdom';

import { getClassesEndingWith } from '../../src/classes/getClassesEndingWith';

let jsdomWindow: DOMWindow;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target foo-post bar"></div>
            `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes ending with value', () => {
        const classes = getClassesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST'
        );

        expect(classes).toEqual(['foo-post', 'baz-post']);
    });

    test('Case-insensitive search for classes ending with value', () => {
        const classes = getClassesEndingWith(
            '-post',
            'foo-post bar baz-post qux-POST',
            true
        );

        expect(classes).toEqual(['foo-post', 'baz-post', 'qux-POST']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const classes = getClassesEndingWith('-post', 'foo bar');

        expect(classes).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const element = jsdomDocument.querySelector('.target');

        if (!element) {
            throw new Error('Element not found');
        }

        const classes = getClassesEndingWith('-post', element);

        expect(classes).toEqual(['foo-post']);
    });
});
