import { JSDOM } from 'jsdom';
import { emptyElement } from '../../src/manipulation/emptyElement';

beforeAll(() => {
    const { window: jsdomWindow } = new JSDOM();

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
});

test('Given an element, remove all of its child nodes', () => {
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
