/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { getFormData } from '../../src/forms/getFormData';

beforeAll(() => {
    document.body.innerHTML = `
        <form class="target">
            <input type="hidden" name="foo" value="bar">
        </div>
    `;
});

test('Successfully returns a populated FormData instance', () => {
    const target = document.querySelector<HTMLFormElement>('.target');

    assertIsNotNull(target);

    const data = getFormData(target);

    expect(data).toBeInstanceOf(FormData);
    expect(data.get('foo')).toBe('bar');
});

test('Successfully returns a populated FormData instance with additional entries', () => {
    const target = document.querySelector<HTMLFormElement>('.target');

    assertIsNotNull(target);

    const data = getFormData(target, {
        additionalEntries: {
            baz: 'qux',
        },
    });

    expect(data).toBeInstanceOf(FormData);
    expect(data.get('foo')).toBe('bar');
    expect(data.get('baz')).toBe('qux');
});
