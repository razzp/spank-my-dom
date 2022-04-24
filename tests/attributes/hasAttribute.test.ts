import { JSDOM } from 'jsdom';

import { hasAttribute } from '../../src/attributes/hasAttribute';

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

test('Given a value with a matching attribute, returns true', () => {
    const result = hasAttribute(globalTarget, 'foo');

    expect(result).toBe(true);
});

test('Given a value without a matching attribute, returns false', () => {
    const result = hasAttribute(globalTarget, 'bar');

    expect(result).toBe(false);
});
