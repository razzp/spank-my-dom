/**
 * @jest-environment jsdom
 */

import { setGlobalCSSVariable } from '../../src/manipulation/setGlobalCSSVariable';

test('Successfully sets and removes global CSS variable', () => {
    const styles = document.documentElement.style;

    setGlobalCSSVariable('--foo', 'rebeccapurple');

    expect(styles.getPropertyValue('--foo')).toBe('rebeccapurple');

    setGlobalCSSVariable('--foo', null);

    expect(styles.getPropertyValue('--foo')).toBe('');
});
