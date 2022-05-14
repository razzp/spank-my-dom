import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { removeData } from '../../../src/attributes/data/removeData';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" data-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Data attribute is successfully removed from element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('data-foo')).toBe(true);

    removeData(target, 'foo');

    expect(target.hasAttribute('data-foo')).toBe(false);
});
