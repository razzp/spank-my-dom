import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { siblings } from '../../src/traversal/siblings';

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
        `,
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given no selector, successfully returns all siblings', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = siblings(target);

    expect(result.length).toBe(8);
});

test('Given a selector, successfully returns all siblings that match', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = siblings(target, '.foo');

    expect(result.length).toBe(4);
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(siblings(target, '.baz')).toEqual([]);
});
