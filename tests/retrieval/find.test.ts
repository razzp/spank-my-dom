/**
 * @jest-environment jsdom
 */

import { find } from '../../src/retrieval/find';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target target-1"></div>
        <div class="target target-2"></div>
    `;
});

test('Simple query finds first match successfully', () => {
    const result = find('.target');

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with custom context finds match successfully', () => {
    const result = find('.target', document);

    expect(result).toBeDefined();
    expect(result?.className.includes('target-1')).toBe(true);
});

test('Query with no matches returns null', () => {
    const result = find('.foo');

    expect(result).toBeNull();
});
