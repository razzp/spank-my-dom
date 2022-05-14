import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { siblingsAfter } from '../../src/traversal/siblingsAfter';

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div></div>
        <div class="foo"></div>
        <div class="foo"></div>
        <div></div>
        <div class="target"></div>
        <div></div>
        <div class="foo"></div>
        <div class="foo"></div>
        <div></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given no selector, successfully returns all following siblings', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = siblingsAfter(target);

    expect(result.length).toBe(4);
});

test('Given a selector, successfully returns all following siblings that match', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = siblingsAfter(target, '.foo');

    expect(result.length).toBe(2);
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(siblingsAfter(target, '.baz')).toEqual([]);
});
