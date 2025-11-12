/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';
import { getFormData } from '../../src/forms/getFormData';

beforeAll(() => {
    document.body.innerHTML = `
        <form class="target">
            <input type="hidden" name="formProp1" value="foo">
            <input type="hidden" name="formProp2" value="bar">
        </div>
    `;
});

test('Successfully returns a populated FormData instance', () => {
    const target = document.querySelector<HTMLFormElement>('.target');

    assertIsNotNull(target);

    const data = getFormData(target);

    expect(data).toBeInstanceOf(FormData);
    expect([...data.entries()].length).toBe(2);
    expect(data.get('formProp1')).toBe('foo');
    expect(data.get('formProp2')).toBe('bar');
});

test('Successfully returns a populated FormData instance with additional entries', () => {
    const target = document.querySelector<HTMLFormElement>('.target');

    assertIsNotNull(target);

    const data = getFormData(target, {
        additionalEntries: {
            customProp1: true,
            customProp2: 1,
            customProp3: { toString: () => 'string' },
            customProp4: new File([], 'file'),
        },
    });

    expect(data).toBeInstanceOf(FormData);
    expect([...data.entries()].length).toBe(6);
    expect(data.get('formProp1')).toBe('foo');
    expect(data.get('formProp2')).toBe('bar');
    expect(data.get('customProp1')).toBe('true');
    expect(data.get('customProp2')).toBe('1');
    expect(data.get('customProp3')).toBe('string');
    expect(data.get('customProp4')).toBeInstanceOf(File);
});

test('Successfully cherry-pick fields based on provided filter array', () => {
    const target = document.querySelector<HTMLFormElement>('.target');

    assertIsNotNull(target);

    const data = getFormData(target, {
        filterFields: ['formProp1'],
    });

    expect(data).toBeInstanceOf(FormData);
    expect([...data.entries()].length).toBe(1);
    expect(data.get('formProp1')).toBe('foo');
    expect(data.has('formProp2')).toBe(false);
});
