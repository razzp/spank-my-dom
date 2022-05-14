import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { getAria } from '../../../src/attributes/aria/getAria';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" aria-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given an aria attribute that exists, returns the value', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getAria(target, 'foo')).toBe('bar');
});

test('Given an aria attribute that does not exist, returns null', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getAria(target, 'nope')).toBeNull();
});
