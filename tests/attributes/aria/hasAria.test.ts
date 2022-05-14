import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { hasAria } from '../../../src/attributes/aria/hasAria';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" aria-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a value with a matching aria attribute, returns true', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasAria(target, 'foo')).toBe(true);
});

test('Given a value without a matching aria attribute, returns false', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasAria(target, 'bar')).toBe(false);
});
