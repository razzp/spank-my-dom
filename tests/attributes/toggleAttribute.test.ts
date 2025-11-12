/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { toggleAttribute } from '../../src/attributes/toggleAttribute';

beforeEach(() => {
    document.body.innerHTML = '<div class="target" baz="qux"></div>';
});

test('Toggling new attribute on element successfully adds attribute', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(toggleAttribute(target, 'foo', 'bar')).toBe(true);
    expect(target.getAttribute('foo')).toBe('bar');
});

test('Toggling new attribute on element with force set to false does not add attribute', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(toggleAttribute(target, 'foo', 'bar', false)).toBe(false);
    expect(target.hasAttribute('foo')).toBe(false);
});

test('Toggling existing attribute on element successfully removes attribute', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(target.hasAttribute('baz')).toBe(true);
    expect(toggleAttribute(target, 'baz', 'qux')).toBe(false);
    expect(target.hasAttribute('baz')).toBe(false);
});

test('Toggling existing attribute on element with force set to true does not remove attribute', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    expect(target.hasAttribute('baz')).toBe(true);
    expect(toggleAttribute(target, 'baz', 'qux', true)).toBe(true);
    expect(target.hasAttribute('baz')).toBe(true);
});
