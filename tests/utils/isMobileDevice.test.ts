/**
 * @jest-environment jsdom
 */

/**
 * User Agent data pulled from: https://www.useragents.me/
 * Last updated: 17 December, 2024
 */

import { isMobileDevice } from '../../src/utils/isMobileDevice';

function setUserAgent(value: string): void {
    Object.defineProperty(navigator, 'userAgent', {
        get() {
            return value;
        },
        configurable: true,
    });
}

function setUserAgentData(isMobile: boolean): void {
    Object.defineProperty(navigator, 'userAgentData', {
        get() {
            return {
                mobile: isMobile,
            };
        },
        configurable: true,
    });
}

test.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.3',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.3',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.',
])('Desktop UA does not match (%s)', (userAgent) => {
    setUserAgent(userAgent);
    expect(isMobileDevice()).toBe(false);
});

test.each([
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.3',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Mobile/15E148 Safari/604.',
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/27.0 Chrome/125.0.0.0 Mobile Safari/537.3',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/346.1.704810410 Mobile/15E148 Safari/604.',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.',
])('Mobile UA does match (%s)', (userAgent) => {
    setUserAgent(userAgent);
    expect(isMobileDevice()).toBe(true);
});

test('With `experimental` set to true, but not supported, falls back to regexp', () => {
    setUserAgent('mobile');
    expect(isMobileDevice(true)).toBe(true);
});

test('With `experimental` set to true, and supported, returns expected values', () => {
    setUserAgentData(false);
    expect(isMobileDevice(true)).toBe(false);
    setUserAgentData(true);
    expect(isMobileDevice(true)).toBe(true);
});
