/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { showElement } from '../../src/manipulation/showElement';

beforeEach(() => {
    document.body.innerHTML = `
        <div class="target" style="display: none !important;"></div>
    `;
});

test('Element is successfully shown', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);

    expect(target.style.getPropertyValue('display')).toBe('none');
    expect(target.style.getPropertyPriority('display')).toBe('important');

    showElement(target);

    expect(target.style.getPropertyValue('display')).toBe('');
});
