/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { parseBoolean } from '../../src/conversion/parseBoolean';
import { getDataOrThrow } from '../../src/retrieval/getDataOrThrow';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target" data-foo="bar" data-number="100" data-boolean="true"></div>
    `;
});

test('Successfully retrieve data from element', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    expect(getDataOrThrow(target, 'foo')).toBe('bar');
    expect(getDataOrThrow(target, 'foo', () => 'qux')).toBe('qux');

    // The following are provided as examples, so it seems wise to test.

    // parseFloat (native)
    expect(getDataOrThrow(target, 'foo', parseFloat)).toBe(Number.NaN);
    expect(getDataOrThrow(target, 'number', parseFloat)).toBe(100);

    // parseBoolean (internal)
    expect(getDataOrThrow(target, 'foo', parseBoolean)).toBe(false);
    expect(getDataOrThrow(target, 'boolean', parseBoolean)).toBe(true);
});

test('Successfully throw when no data found', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    expect(() => getDataOrThrow(target, 'bar')).toThrow(SyntaxError);
    expect(() => getDataOrThrow(target, 'bar', () => Symbol())).toThrow(
        SyntaxError,
    );
});
