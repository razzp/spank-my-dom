import { JSDOM } from 'jsdom';

import { findSingleOrThrow } from '../../src/retrieval/findSingleOrThrow';

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target"></div>
        `,
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a selector that matches an element, returns that element', () => {
    expect.assertions(1);

    try {
        expect(findSingleOrThrow('.target')).toBeDefined();
    } catch {
        // Do nothing.
    }
});

test('Given a selector with no matches, throws', () => {
    expect(() => findSingleOrThrow('.foo', document)).toThrowError();
});
