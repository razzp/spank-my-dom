import { DOMWindow, JSDOM } from 'jsdom';
import { emptyElement } from '../../src/manipulation/emptyElement';

let jsdomWindow: DOMWindow;

beforeAll(() => {
    jsdomWindow = new JSDOM().window;

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
});

describe('Emptying an element', () => {
    test('Emptying an element successfully removes all child nodes', () => {
        const element = document.createElement('div');
        
        element.innerHTML = `
            foo
            <div></div>
            <div></div>
        `;

        // We use GTE here because breaks/spaces count as nodes.
        expect(element.childNodes.length).toBeGreaterThanOrEqual(3);

        emptyElement(element);

        expect(element.childNodes.length).toBe(0);
    });
});
