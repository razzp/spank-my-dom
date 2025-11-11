/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { parseBoolean } from '../../src/conversion/parseBoolean';
import { getData } from '../../src/retrieval/getData';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target" data-foo="bar" data-number="100" data-boolean="true"></div>
    `;
});

test('Successfully retrieve data from element', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    expect(getData(target, 'foo')).toBe('bar');
    expect(getData(target, 'foo', () => 'qux')).toBe('qux');

    // The following are provided as examples, so it seems wise to test.

    // parseFloat (native)
    expect(getData(target, 'foo', parseFloat)).toBe(Number.NaN);
    expect(getData(target, 'number', parseFloat)).toBe(100);

    // parseBoolean (internal)
    expect(getData(target, 'foo', parseBoolean)).toBe(false);
    expect(getData(target, 'boolean', parseBoolean)).toBe(true);
});

test('Successfully return `null` when no data found', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    expect(getData(target, 'bar')).toBe(null);
    expect(getData(target, 'bar', () => Symbol())).toBe(null);
});
