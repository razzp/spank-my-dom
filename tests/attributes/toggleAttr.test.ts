import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { toggleAttr } from '../../src/attributes/toggleAttr';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" baz="qux"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Toggling new attribute on element successfully adds attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleAttr(target, 'foo', 'bar')).toBe(true);
    expect(target.getAttribute('foo')).toBe('bar');
});

test('Toggling new attribute on element with force set to false does not add attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleAttr(target, 'foo', 'bar', false)).toBe(false);
    expect(target.hasAttribute('foo')).toBe(false);
});

test('Toggling existing attribute on element successfully removes attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('baz')).toBe(true);
    expect(toggleAttr(target, 'baz', 'qux')).toBe(false);
    expect(target.hasAttribute('baz')).toBe(false);
});

test('Toggling existing attribute on element with force set to true does not remove attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('baz')).toBe(true);
    expect(toggleAttr(target, 'baz', 'qux', true)).toBe(true);
    expect(target.hasAttribute('baz')).toBe(true);
});
