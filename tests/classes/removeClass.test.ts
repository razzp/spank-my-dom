import { JSDOM } from 'jsdom';

import { createElement } from '../../src/manipulation/createElement';
import { removeClass } from '../../src/classes/removeClass';

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Class is successfully removed from element', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo bar',
        },
    });

    removeClass(element, 'foo');

    expect(element.className).toBe('bar');
});
