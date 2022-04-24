import { JSDOM } from 'jsdom';

import { removeAttribute } from '../../src/attributes/removeAttribute';

let globalTarget: Element;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Attribute is successfully removed from element', () => {
    expect(globalTarget.hasAttribute('foo')).toBe(true);

    removeAttribute(globalTarget, 'foo');

    expect(globalTarget.hasAttribute('foo')).toBe(false);
});
