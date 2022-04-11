import { DOMWindow, JSDOM } from 'jsdom';

import { getClassesContaining } from '../../src/classes/getClassesContaining';

let jsdomWindow: DOMWindow;
let jsdomDocument: Document;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target f-mid-oo bar"></div>
            `
    );

    jsdomWindow = window;
    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.Element = jsdomWindow.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes containing value', () => {
        const classes = getClassesContaining(
            '-mid-',
            'f-mid-oo bar b-mid-az q-MID-ux'
        );

        expect(classes).toEqual(['f-mid-oo', 'b-mid-az']);
    });

    test('Case-insensitive search for classes containing value', () => {
        const classes = getClassesContaining(
            '-mid-',
            'f-mid-oo bar b-mid-az q-MID-ux',
            true
        );

        expect(classes).toEqual(['f-mid-oo', 'b-mid-az', 'q-MID-ux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const classes = getClassesContaining('-mid-', 'foo bar');

        expect(classes).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const element = jsdomDocument.querySelector('.target');

        if (!element) {
            throw new Error('Element not found');
        }

        const classes = getClassesContaining('-mid-', element);

        expect(classes).toEqual(['f-mid-oo']);
    });
});
