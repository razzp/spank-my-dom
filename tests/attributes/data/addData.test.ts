import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { addData } from '../../../src/attributes/data/addData';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Data attribute is successfully added to element', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('data-foo')).toBe(false);

    addData(target, 'foo', 'bar');

    expect(target.hasAttribute('data-foo')).toBe(true);
    expect(target.getAttribute('data-foo')).toBe('bar');
});
