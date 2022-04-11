import { JSDOM } from 'jsdom';
import { createElement } from '../../src/manipulation/createElement';

beforeAll(() => {
    const { window: jsdomWindow } = new JSDOM();

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
    global.HTMLDivElement = jsdomWindow.HTMLDivElement;
});

test('Given a tag name, creates and returns an element', () => {
    const element = createElement('div');

    expect(element).toBeInstanceOf(HTMLDivElement);
});

test('Given an `attributes` object, returns an element with corresponding attributes', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo bar',
        },
    });

    expect(element.className).toBe('foo bar');
});

test('Given a `classes` array, returns an element with corresponding classes', () => {
    const element = createElement('div', {
        classes: ['foo', 'bar'],
    });

    expect(element.className).toBe('foo bar');
});

test('Given a `children` array, returns an element with corresponding children', () => {
    const childElement = document.createElement('div');

    const element = createElement('div', {
        children: [childElement],
    });

    expect(element.childElementCount).toBe(1);
    expect(element.children[0]).toBe(childElement);
});

test('Given an `innerHTML` string, returns an element with corresponding content', () => {
    const innerHtml = '<div></div>';

    const element = createElement('div', {
        innerHTML: innerHtml,
    });

    expect(element.childElementCount).toBe(1);
    expect(element.innerHTML).toBe(innerHtml);
});

test('Given multiple properties, returns a corresponding element', () => {
    const childElement = document.createElement('div');
    const innerHtml = '<div></div>';

    const element = createElement('div', {
        attributes: {
            class: 'foo',
            id: 'bar',
        },
        classes: ['baz'],
        children: [childElement],
        innerHTML: innerHtml,
    });

    // `classes` should have overwritten `attributes.class`.
    expect(element.className).toBe('baz');

    expect(element.hasAttribute('id')).toBe(true);
    expect(element.childElementCount).toBe(2);
});
