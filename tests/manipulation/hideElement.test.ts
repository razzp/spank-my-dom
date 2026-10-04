// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeEach, expect, test } from 'vitest';
import { hideElement } from '../../src/manipulation/hideElement';

beforeEach(() => {
    document.body.innerHTML = '<div class="target"></div>';
});

test('Element is successfully hidden', () => {
    const target = document.querySelector<HTMLElement>('.target');

    assertIsNotNull(target);
    hideElement(target);

    expect(target.style.getPropertyValue('display')).toBe('none');
    expect(target.style.getPropertyPriority('display')).toBe('important');
});
