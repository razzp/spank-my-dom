import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { hasAttr } from '../../src/attributes/hasAttr';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a value with a matching attribute, returns true', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasAttr(target, 'foo')).toBe(true);
});

test('Given a value without a matching attribute, returns false', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasAttr(target, 'bar')).toBe(false);
});
