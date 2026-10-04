// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeAll, expect, test, vi } from 'vitest';
import { forPointerEventType } from '../../src/events/forPointerEventType';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target"></div>
    `;
});

test('Callback is successfully triggered when pointer types match', () => {
    const callback = vi.fn();
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    target.addEventListener('click', forPointerEventType('mouse', callback));

    target.dispatchEvent(new PointerEvent('click', { pointerType: 'mouse' }));

    expect(callback).toHaveBeenCalledTimes(1);
});

test('Callback is not triggered when pointer types do not match', () => {
    const callback = vi.fn();
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    target.addEventListener('click', forPointerEventType('mouse', callback));

    target.dispatchEvent(new PointerEvent('click', { pointerType: 'pen' }));
    target.dispatchEvent(new PointerEvent('click', { pointerType: 'touch' }));

    expect(callback).not.toHaveBeenCalled();
});
