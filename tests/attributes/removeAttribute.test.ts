import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { removeAttribute } from '../../src/attributes/removeAttribute';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Attribute is successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('foo')).toBe(true);

    removeAttribute(target, 'foo');

    expect(target.hasAttribute('foo')).toBe(false);
});
