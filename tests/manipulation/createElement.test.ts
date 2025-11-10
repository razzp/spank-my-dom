/**
 * @jest-environment jsdom
 */

import { createElement } from '../../src/manipulation/createElement';

test('Basic element is successfully created', () => {
    const element = createElement('div');

    expect(element).toBeInstanceOf(HTMLDivElement);
});

test('Element with options specified is successfully created', () => {
    const nodeToPrepend = document.createElement('span');
    const nodeToAppend = document.createElement('span');

    const element = createElement('div', {
        content: 'foo',
        attributes: {
            ariaExpanded: 'true',
        },
        classes: ['bar', 'baz'],
        styles: {
            color: 'rebeccapurple',
        },
        data: {
            qux: 'quux',
        },
        prepend: [nodeToPrepend],
        append: [nodeToAppend],
    });

    const childNodes = [...element.childNodes];

    expect(element).toBeInstanceOf(HTMLDivElement);
    expect(element.getAttribute('aria-expanded')).toBe('true');
    expect(element.style.color).toBe('rebeccapurple');
    expect(element.className).toBe('bar baz');
    expect(element.dataset.qux).toBe('quux');

    expect(childNodes[0]).toBe(nodeToPrepend);
    expect(childNodes[1].nodeType).toBe(Node.TEXT_NODE);
    expect(childNodes[1].textContent).toBe('foo');
    expect(childNodes[2]).toBe(nodeToAppend);
});
