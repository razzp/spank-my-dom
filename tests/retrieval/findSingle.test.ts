/**
 * @jest-environment jsdom
 */

import { findSingle } from '../../src/retrieval/findSingle';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target target-1"></div>
        <div class="target target-2"></div>
    `;
});

test('Simple query finds first match successfully', () => {
    const result = findSingle('.target');

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with custom context finds match successfully', () => {
    const result = findSingle('.target', document);

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with no matches returns null', () => {
    const result = findSingle('.foo');

    expect(result).toBeNull();
});
