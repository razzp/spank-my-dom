import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { hasData } from '../../../src/attributes/data/hasData';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" data-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a value with a matching data attribute, returns true', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasData(target, 'foo')).toBe(true);
});

test('Given a value without a matching data attribute, returns false', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(hasData(target, 'bar')).toBe(false);
});
