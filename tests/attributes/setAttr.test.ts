import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { setAttr } from '../../src/attributes/setAttr';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Attribute is successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('foo')).toBe(false);

    setAttr(target, 'foo', 'bar');

    expect(target.hasAttribute('foo')).toBe(true);
    expect(target.getAttribute('foo')).toBe('bar');
});
