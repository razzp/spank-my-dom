import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { getAttr } from '../../src/attributes/getAttr';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given an attribute that exists, returns the value', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getAttr(target, 'foo')).toBe('bar');
});

test('Given an attribute that does not exist, returns null', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getAttr(target, 'nope')).toBeNull();
});
