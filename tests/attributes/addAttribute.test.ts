import { JSDOM } from 'jsdom';

import { addAttribute } from '../../src/attributes/addAttribute';

let globalTarget: Element;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Attribute is successfully added to element', () => {
    expect(globalTarget.hasAttribute('foo')).toBe(false);

    addAttribute(globalTarget, 'foo', 'bar');

    expect(globalTarget.hasAttribute('foo')).toBe(true);
    expect(globalTarget.getAttribute('foo')).toBe('bar');
});
