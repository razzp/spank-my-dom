import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { removeAria } from '../../../src/attributes/aria/removeAria';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" aria-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Aria attribute is successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('aria-foo')).toBe(true);

    removeAria(target, 'foo');

    expect(target.hasAttribute('aria-foo')).toBe(false);
});
