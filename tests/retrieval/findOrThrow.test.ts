import { JSDOM } from 'jsdom';

import { findOrThrow } from '../../src/retrieval/findOrThrow';

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a selector that matches an element, returns that element', () => {
    expect.assertions(1);

    try {
        expect(findOrThrow('.target')).toBeDefined();
    } catch {
        // Do nothing.
    }
});

test('Given a selector with no matches, throws', () => {
    expect(() => findOrThrow('.foo', document)).toThrowError();
});
