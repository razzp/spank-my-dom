import { JSDOM } from 'jsdom';
import { querySelector } from '../../src/retrieval/querySelector';

let jsdomDocument: Document;

beforeAll(() => {
    const { window: jsdomWindow } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        <div class="target target-2"></div>
        `
    );

    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
});

describe('Retrieving elements from the DOM', () => {
    test('Simple query finds first match successfully', () => {
        const result = querySelector('.target');

        expect(result).toBeDefined();
        expect(result?.className.includes('target-1')).toBe(true);
    });

    test('Query with custom context finds match successfully', () => {
        const result = querySelector('.target', jsdomDocument);

        expect(result).toBeDefined();
        expect(result?.className.includes('target-1')).toBe(true);
    });

    test('Query with no matches returns null', () => {
        const result = querySelector('.foo');

        expect(result).toBeNull();
    });
});
