import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { toggleData } from '../../../src/attributes/data/toggleData';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" data-baz="qux"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Toggling new data attribute on element successfully adds attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleData(target, 'foo', 'bar')).toBe(true);
    expect(target.getAttribute('data-foo')).toBe('bar');
});

test('Toggling new data attribute on element with force set to false does not add attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(toggleData(target, 'foo', 'bar', false)).toBe(false);
    expect(target.hasAttribute('data-foo')).toBe(false);
});

test('Toggling existing data attribute on element successfully removes attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('data-baz')).toBe(true);
    expect(toggleData(target, 'baz', 'qux')).toBe(false);
    expect(target.hasAttribute('data-baz')).toBe(false);
});

test('Toggling existing data attribute on element with force set to true does not remove attribute', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(target.hasAttribute('data-baz')).toBe(true);
    expect(toggleData(target, 'baz', 'qux', true)).toBe(true);
    expect(target.hasAttribute('data-baz')).toBe(true);
});
