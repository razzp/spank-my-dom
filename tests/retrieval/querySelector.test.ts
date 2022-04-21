import { JSDOM } from 'jsdom';

import { querySelector } from '../../src/retrieval/querySelector';

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        <div class="target target-2"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Simple query finds first match successfully', () => {
    const result = querySelector('.target');

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with custom context finds match successfully', () => {
    const result = querySelector('.target', document);

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with no matches returns null', () => {
    const result = querySelector('.foo');

    expect(result).toBeNull();
});
