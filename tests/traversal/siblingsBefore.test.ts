import { JSDOM } from 'jsdom';

import { siblingsBefore } from '../../src/traversal/siblingsBefore';

let globalTarget: Element;

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

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Given no selector, successfully returns all preceding siblings', () => {
    const result = siblingsBefore(globalTarget);

    expect(result.length).toBe(4);
});

test('Given a selector, successfully returns all preceding siblings that match', () => {
    const result = siblingsBefore(globalTarget, '.foo');

    expect(result.length).toBe(2);
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const result = siblingsBefore(globalTarget, '.baz');

    expect(result).toEqual([]);
});
