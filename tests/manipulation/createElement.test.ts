/**
 * @jest-environment jsdom
 */

import { createElement } from '../../src/manipulation/createElement';

test('Given just a tag name, creates and returns an element', () => {
    expect(createElement('div')).toBeInstanceOf(HTMLDivElement);
});

test('Given a `props` object, returns an element with corresponding props', () => {
    const element = createElement('div', {
        props: {
            class: 'foo bar',
        },
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

test('Given multiple props, returns a corresponding element', () => {
    const childElement = document.createElement('div');

    const element = createElement('div', {
        props: {
            class: 'foo',
            id: 'bar',
        },
        children: [childElement, childElement.cloneNode()],
    });

    expect(element.className).toBe('foo');
    expect(element.hasAttribute('id')).toBe(true);
    expect(element.childElementCount).toBe(2);
});

test('Given a `class` prop of type `Array`, converts value to string', () => {
    const element = createElement('div', {
        props: {
            class: ['foo', 'bar'],
        },
    });

    expect(element.className).toBe('foo bar');
});

test('Given a `namespace` prop, invokes `createElementNS` instead', () => {
    const element = createElement('svg', {
        namespace: 'http://www.w3.org/2000/svg',
    });

    expect(element instanceof SVGSVGElement).toBe(true);
    expect(element.namespaceURI).toBe('http://www.w3.org/2000/svg');
});
