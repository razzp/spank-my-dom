import { JSDOM } from 'jsdom';

import { createElement } from '../../src/manipulation/createElement';
import { replaceContents } from '../../src/manipulation/replaceContents';

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
    global.Node = window.Node;
});

test('Given a `Node`, successfully replaces element contents with it', () => {
    const element = createElement('div', {
        innerHTML: '<div></div>',
    });

    replaceContents(element, '<div id="bar"></div>');

    const child = element.querySelector('#bar');

    expect(element.childElementCount).toBe(1);
    expect(child).toBeDefined();
});

test('Given an HTML string, successfully replaces element contents with it', () => {
    const element = createElement('div', {
        innerHTML: '<div></div>',
    });

    const child = createElement('div');

    replaceContents(element, child);

    expect(element.childElementCount).toBe(1);
    expect(element.firstChild).toBe(child);
});

test('Given multiple replacements, successfully replaces element contents with them', () => {
    const element = createElement('div', {
        innerHTML: '<div></div>',
    });

    replaceContents(element, '<div></div>', createElement('div'));

    expect(element.childElementCount).toBe(2);
});
