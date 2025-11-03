/**
 * @jest-environment jsdom
 */

import { findSingleOrThrow } from '../../src/retrieval/findSingleOrThrow';

beforeAll(() => {
    document.body.innerHTML = '<div class="target"></div>';
});

test('Given a selector that matches an element, returns that element', () => {
    expect.assertions(1);

    try {
        expect(findSingleOrThrow('.target')).toBeDefined();
    } catch {}
});

test('Given a selector with no matches, throws', () => {
    expect(() => findSingleOrThrow('.foo', document)).toThrowError();
});
