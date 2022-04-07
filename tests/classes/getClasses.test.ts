import { DOMWindow, JSDOM } from 'jsdom';

import { getClasses } from '../../src/classes/getClasses';

describe('Get classes from string', () => {
    beforeEach(() => {
        const { window: jsdomWindow } = new JSDOM();

        // Ensure that required globals are available.
        global.Element = jsdomWindow.Element;
    });

    test('Case-sensitive search for classes starting with value', () => {
        const classes = getClasses(
            'startingwith',
            'pre-',
            'pre-foo bar pre-baz PRE-qux'
        );

        expect(classes).toEqual(['pre-foo', 'pre-baz']);
    });

    test('Case-insensitive search for classes starting with value', () => {
        const classes = getClasses(
            'startingwith',
            'pre-',
            'pre-foo bar pre-baz PRE-qux',
            true
        );

        expect(classes).toEqual(['pre-foo', 'pre-baz', 'PRE-qux']);
    });

    test('Case-sensitive search for classes ending with value', () => {
        const classes = getClasses(
            'endingwith',
            '-post',
            'foo-post bar baz-post qux-POST'
        );

        expect(classes).toEqual(['foo-post', 'baz-post']);
    });

    test('Case-insensitive search for classes ending with value', () => {
        const classes = getClasses(
            'endingwith',
            '-post',
            'foo-post bar baz-post qux-POST',
            true
        );

        expect(classes).toEqual(['foo-post', 'baz-post', 'qux-POST']);
    });

    test('Case-sensitive search for classes containing value', () => {
        const classes = getClasses(
            'containing',
            '-xyz-',
            'f-xyz-oo bar b-xyz-az q-XYZ-ux'
        );

        expect(classes).toEqual(['f-xyz-oo', 'b-xyz-az']);
    });

    test('Case-insensitive search for classes containing value', () => {
        const classes = getClasses(
            'containing',
            '-xyz-',
            'f-xyz-oo bar b-xyz-az q-XYZ-ux',
            true
        );

        expect(classes).toEqual(['f-xyz-oo', 'b-xyz-az', 'q-XYZ-ux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const classes = getClasses('startingwith', 'pre-', 'foo bar');

        expect(classes).toEqual([]);
    });

    test('Unknown search type throws an error', () => {
        expect(() => getClasses('foo' as never, '', '')).toThrow(TypeError);
    });
});

describe('Get classes from element', () => {
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

    test('Case-sensitive search for classes starting with value', () => {
        const element = jsdomDocument.querySelector('.target');

        if (!element) {
            throw new Error('Element not found');
        }

        const classes = getClasses('startingwith', 'pre-', element);

        expect(classes).toEqual(['pre-foo']);
    });
});
