import { JSDOM } from 'jsdom';

import { create } from '../../src/manipulation/create';

beforeAll(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLDivElement = window.HTMLDivElement;
});

test('Given a tag name, creates and returns an element', () => {
    expect(create('div')).toBeInstanceOf(HTMLDivElement);
});

test('Given an `attributes` object, returns an element with corresponding attributes', () => {
    const element = create('div', {
        attributes: {
            class: 'foo bar',
        },
    });

    expect(element.className).toBe('foo bar');
});

test('Given a `children` array, returns an element with corresponding children', () => {
    const childElement = document.createElement('div');

    const element = create('div', {
        children: [childElement],
    });

    expect(element.childElementCount).toBe(1);
    expect(element.children[0]).toBe(childElement);
});

test('Given an `innerHTML` string, returns an element with corresponding content', () => {
    const innerHtml = '<div></div>';

    const element = create('div', {
        innerHTML: innerHtml,
    });

    expect(element.childElementCount).toBe(1);
    expect(element.innerHTML).toBe(innerHtml);
});

test('Given multiple properties, returns a corresponding element', () => {
    const childElement = document.createElement('div');
    const innerHtml = '<div></div>';

    const element = create('div', {
        attributes: {
            class: 'foo',
            id: 'bar',
        },
        children: [childElement],
        innerHTML: innerHtml,
    });

    // `classes` should have overwritten `attributes.class`.
    expect(element.className).toBe('foo');

    expect(element.hasAttribute('id')).toBe(true);
    expect(element.childElementCount).toBe(2);
});
