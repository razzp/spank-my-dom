import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { addClass } from '../../src/classes/addClass';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Single class is successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    addClass(target, 'foo');

    expect(target.className).toBe('target foo');
});

test('Multiple classes are successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    addClass(target, 'foo', 'bar');

    expect(target.className).toBe('target foo bar');
});

test('Multiple space-separated classes are successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    addClass(target, 'foo bar');

    expect(target.className).toBe('target foo bar');
});
