/**
 * @jest-environment jsdom
 */

import { findOrThrow } from '../../src/retrieval/findOrThrow';

beforeAll(() => {
    document.body.innerHTML = '<div class="target"></div>';
});

test('Given a selector that matches an element, returns that element', () => {
    expect.assertions(1);

    try {
        expect(findOrThrow('.target')).toBeDefined();
    } catch {}
});

test('Given a selector with no matches, throws', () => {
    expect(() => findOrThrow('.foo', document)).toThrow();
});
