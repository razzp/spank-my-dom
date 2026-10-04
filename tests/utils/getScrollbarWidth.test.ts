// @vitest-environment jsdom

import { expect, test } from 'vitest';
import { getScrollbarWidth } from '../../src/utils/getScrollbarWidth';

test('A scrollbar width is successfully returned', async () => {
    expect(getScrollbarWidth()).toBeTypeOf('number');
});
