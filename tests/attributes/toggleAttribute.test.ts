import { JSDOM } from 'jsdom';

import { createElement } from '../../src/manipulation/createElement';
import { toggleAttribute } from '../../src/attributes/toggleAttribute';

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Toggling new attribute on element successfully adds attribute', () => {
    const element = createElement('div');
    const result = toggleAttribute(element, 'foo', 'bar');

    expect(result).toBe(true);
    expect(element.getAttribute('foo')).toBe('bar');
});

test('Toggling new attribute on element with force set to false does not add attribute', () => {
    const element = createElement('div');
    const result = toggleAttribute(element, 'foo', 'bar', false);

    expect(result).toBe(false);
    expect(element.hasAttribute('foo')).toBe(false);
});

test('Toggling existing attribute on element successfully removes attribute', () => {
    const element = createElement('div', {
        attributes: {
            foo: 'bar',
        },
    });

    expect(element.hasAttribute('foo')).toBe(true);

    const result = toggleAttribute(element, 'foo', 'bar');

    expect(result).toBe(false);
    expect(element.hasAttribute('foo')).toBe(false);
});

test('Toggling existing attribute on element with force set to true does not remove attribute', () => {
    const element = createElement('div', {
        attributes: {
            foo: 'bar',
        },
    });

    expect(element.hasAttribute('foo')).toBe(true);

    const result = toggleAttribute(element, 'foo', 'bar', true);

    expect(result).toBe(true);
    expect(element.hasAttribute('foo')).toBe(true);
});
