import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { classesContaining } from '../../src/classes/classesContaining';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target f-mid-oo bar"></div>
            `,
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.Element = window.Element;
});

describe('Get classes from string', () => {
    test('Case-sensitive search for classes containing value', () => {
        const result = classesContaining(
            '-mid-',
            'f-mid-oo bar b-mid-az q-MID-ux',
        );

        expect(result).toEqual(['f-mid-oo', 'b-mid-az']);
    });

    test('Case-insensitive search for classes containing value', () => {
        const result = classesContaining(
            '-mid-',
            'f-mid-oo bar b-mid-az q-MID-ux',
            true,
        );

        expect(result).toEqual(['f-mid-oo', 'b-mid-az', 'q-MID-ux']);
    });

    test('Successfully returns an empty array if there are no matches', () => {
        const result = classesContaining('-mid-', 'foo bar');

        expect(result).toEqual([]);
    });
});

describe('Get classes from element', () => {
    test('Case-sensitive search for classes starting with value', () => {
        const target = guarantee(document.querySelector('.target'));
        const result = classesContaining('-mid-', target);

        expect(result).toEqual(['f-mid-oo']);
    });
});
