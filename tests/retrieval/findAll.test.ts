/**
 * @jest-environment jsdom
 */

import { findAll } from '../../src/retrieval/findAll';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target target-1"></div>
        <div class="target target-2"></div>
    `;
});

test('Given a valid string, returns all matches', () => {
    const result = findAll('.target');

    expect(result.length).toBe(2);
});

test('Given a valid string and context, returns all matches within the context', () => {
    const result = findAll('.target', document);

    expect(result.length).toBe(2);
});

test('Given a valid but non-matching string, returns an empty array', () => {
    const result = findAll('.foo');

    expect(result).toEqual([]);
});

test('Given an invalid string, throws an error', () => {
    expect(() => findAll('.')).toThrow();
});
