import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { removeClass } from '../../src/classes/removeClass';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target foo bar"></div>
            `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Single class is successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    removeClass(target, 'foo');

    expect(target.className).toBe('target bar');
});

test('Multiple classes are successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    removeClass(target, 'foo', 'bar');

    expect(target.className).toBe('target');
});

test('Multiple space-separated classes are successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    removeClass(target, 'foo bar');

    expect(target.className).toBe('target');
});
