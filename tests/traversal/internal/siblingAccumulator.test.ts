import { JSDOM } from 'jsdom';

import { siblingAccumulator } from '../../../src/traversal/internal/siblingAccumulator';

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
        <div class="bar"></div>
        <div class="bar"></div>
        <div></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Given no selector, successfully returns all preceding siblings', () => {
    const result = siblingAccumulator('previousElementSibling', globalTarget);

    expect(result.length).toBe(4);
});

test('Given a selector, successfully returns all preceding siblings that match', () => {
    const result = siblingAccumulator(
        'previousElementSibling',
        globalTarget,
        '.foo'
    );

    expect(result.length).toBe(2);

    expect(result.every((element) => element.classList.contains('foo'))).toBe(
        true
    );
});

test('Given no selector, successfully returns all following siblings', () => {
    const result = siblingAccumulator('nextElementSibling', globalTarget);

    expect(result.length).toBe(4);
});

test('Given a selector, successfully returns all following siblings that match', () => {
    const result = siblingAccumulator(
        'nextElementSibling',
        globalTarget,
        '.bar'
    );

    expect(result.length).toBe(2);

    expect(result.every((element) => element.classList.contains('bar'))).toBe(
        true
    );
});

test('Given a selector that will yield no matches, returns an empty array', () => {
    const result = siblingAccumulator(
        'nextElementSibling',
        globalTarget,
        '.baz'
    );

    expect(result).toEqual([]);
});
