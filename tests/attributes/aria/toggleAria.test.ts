import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { toggleAria } from '../../../src/attributes/aria/toggleAria';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" aria-baz="qux"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Toggling new aria attribute on element successfully adds attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleAria(target, 'foo', 'bar')).toBe(true);
    expect(target.getAttribute('aria-foo')).toBe('bar');
});

test('Toggling new aria attribute on element with force set to false does not add attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleAria(target, 'foo', 'bar', false)).toBe(false);
    expect(target.hasAttribute('aria-foo')).toBe(false);
});

test('Toggling existing aria attribute on element successfully removes attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('aria-baz')).toBe(true);
    expect(toggleAria(target, 'baz', 'qux')).toBe(false);
    expect(target.hasAttribute('aria-baz')).toBe(false);
});

test('Toggling existing aria attribute on element with force set to true does not remove attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('aria-baz')).toBe(true);
    expect(toggleAria(target, 'baz', 'qux', true)).toBe(true);
    expect(target.hasAttribute('aria-baz')).toBe(true);
});
