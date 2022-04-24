import { JSDOM } from 'jsdom';

import { createElement } from '../../src/manipulation/createElement';
import { toggleClass } from '../../src/classes/toggleClass';

beforeEach(() => {
    const { window } = new JSDOM();

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a single token that does not exist, adds token and returns true', () => {
    const element = createElement('div');
    const result = toggleClass(element, 'foo');

    expect(element.className).toBe('foo');
    expect(result).toBe(true);
});

test('Given multiple tokens that do no exist, adds tokens and returns true', () => {
    const element = createElement('div');
    const result = toggleClass(element, 'foo bar');

    expect(element.className).toBe('foo bar');
    expect(result).toBe(true);
});

test('Given multiple tokens with excess whitespace, adds tokens and returns true', () => {
    const element = createElement('div');
    const result = toggleClass(element, 'foo     bar');

    expect(element.className).toBe('foo bar');
    expect(result).toBe(true);
});

test('Given a single token that already exists, removes token and returns false', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo',
        },
    });

    const result = toggleClass(element, 'foo');

    expect(element.className).toBe('');
    expect(result).toBe(false);
});

test('Given multiple tokens that already exist, removes tokens and returns false', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo bar',
        },
    });

    const result = toggleClass(element, 'foo bar');

    expect(element.className).toBe('');
    expect(result).toBe(false);
});

test('Given multiple tokens, some of which already exist, toggles tokens and returns false', () => {
    const element = createElement('div', {
        attributes: {
            class: 'foo',
        },
    });

    const result = toggleClass(element, 'foo bar');

    expect(element.className).toBe('bar');
    expect(result).toBe(false);
});
