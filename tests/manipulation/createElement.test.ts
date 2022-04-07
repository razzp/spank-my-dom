import { DOMWindow, JSDOM } from 'jsdom';
import { createElement } from '../../src/manipulation/createElement';

let jsdomWindow: DOMWindow;

beforeAll(() => {
    jsdomWindow = new JSDOM().window;

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
    global.HTMLDivElement = jsdomWindow.HTMLDivElement;
});

describe('Creating a new element', () => {
    test('Simple element is created successfully', () => {
        const element = createElement('div');

        expect(element).toBeInstanceOf(HTMLDivElement);
    });

    test('Element with `attributes` option is created successfully', () => {
        const element = createElement('div', {
            attributes: {
                class: 'foo bar'
            }
        });

        expect(element.className).toBe('foo bar');
    });

    test('Element with `classes` option is created successfully', () => {
        const element = createElement('div', {
            classes: ['foo', 'bar']
        });

        expect(element.className).toBe('foo bar');
    });

    test('Element with `children` option is created successfully', () => {
        const childElement = document.createElement('div');

        const element = createElement('div', {
            children: [childElement]
        });

        expect(element.childElementCount).toBe(1);
        expect(element.children[0]).toBe(childElement);
    });

    test('Element with `innerHTML` option is created successfully', () => {
        const innerHtml = '<div></div>';

        const element = createElement('div', {
            innerHTML: innerHtml
        });

        expect(element.childElementCount).toBe(1);
        expect(element.innerHTML).toBe(innerHtml);
    });

    test('Element with multiple options is created successfully', () => {
        const childElement = document.createElement('div');
        const innerHtml = '<div></div>';

        const element = createElement('div', {
            attributes: {
                class: 'foo',
                id: 'bar'
            },
            classes: ['baz'],
            children: [childElement],
            innerHTML: innerHtml
        });

        // `classes` should have overwritten `attributes.class`.
        expect(element.className).toBe('baz');

        expect(element.hasAttribute('id')).toBe(true);
        expect(element.childElementCount).toBe(2);
    });
});
