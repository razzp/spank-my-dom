import { JSDOM } from 'jsdom';

import { createElement } from '../../src/manipulation/createElement';
import { addClass } from '../../src/classes/addClass';

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Class is successfully added to element', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo',
        },
    });

    addClass(element, 'bar');

    expect(element.className).toBe('foo bar');
});
