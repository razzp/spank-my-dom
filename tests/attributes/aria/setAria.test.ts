import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { setAria } from '../../../src/attributes/aria/setAria';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Aria attribute is successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('aria-foo')).toBe(false);

    setAria(target, 'foo', 'bar');

    expect(target.hasAttribute('aria-foo')).toBe(true);
    expect(target.getAttribute('aria-foo')).toBe('bar');
});
