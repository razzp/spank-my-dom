// @vitest-environment jsdom

import { assertIsNotNull } from 'bossy-boots';
import { beforeAll, expect, test, vi } from 'vitest';
import { delegate } from '../../src/events/delegate';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="parent target">
            <div class="child target">
                <div class="grandchild target"></div>
            </div>
        </div>
    `;
});

test('Callback is successfully fired on matched target', () => {
    const callback = vi.fn();
    const parent = document.querySelector('.parent');
    const grandchild = document.querySelector('.grandchild');

    assertIsNotNull(parent);
    assertIsNotNull(grandchild);

    document.addEventListener('click', delegate('.parent', callback));

    grandchild.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(1);

    const delegateEvent = callback.mock.calls[0][0];

    expect(delegateEvent.delegateTarget).toBe(parent);
    expect(delegateEvent.event.target).toBe(grandchild);
});

test('Callback is repeatedly called as event bubbles and targets match', () => {
    const callback = vi.fn();
    const grandchild = document.querySelector('.grandchild');

    assertIsNotNull(grandchild);

    document.addEventListener('click', delegate('.target', callback));

    grandchild.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(3);
});

test('Callback is ignored on subsequent matches after delegation is forced to stop', () => {
    const callback = vi.fn();
    const grandchild = document.querySelector('.grandchild');

    assertIsNotNull(grandchild);

    document.addEventListener(
        'click',
        delegate('.target', (event) => {
            event.stopDelegation();
            callback(event);
        }),
    );

    grandchild.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(callback).toHaveBeenCalledTimes(1);
});
