import { DOMWindow, JSDOM } from 'jsdom';

import { getClassesStartingWith } from '../../src/classes/getClassesStartingWith';

let jsdomWindow: DOMWindow;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target pre-foo bar"></div>
            `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const classes = getClassesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux'
        );

        expect(classes).toEqual(['pre-foo', 'pre-baz']);
    });

    test('Case-insensitive search for classes starting with value', () => {
        const classes = getClassesStartingWith(
            'pre-',
            'pre-foo bar pre-baz PRE-qux',
            true
        );

        expect(classes).toEqual(['pre-foo', 'pre-baz', 'PRE-qux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const classes = getClassesStartingWith('pre-', 'foo bar');

        expect(classes).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const element = jsdomDocument.querySelector('.target');

        if (!element) {
            throw new Error('Element not found');
        }

        const classes = getClassesStartingWith('pre-', element);

        expect(classes).toEqual(['pre-foo']);
    });
});
