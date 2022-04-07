import { JSDOM } from 'jsdom';
import { querySelectorAll } from '../../src/retrieval/querySelectorAll';

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
    test('Simple query finds matches successfully', () => {
        const result = querySelectorAll('.target');

        expect(result.length).toBe(2);
    });

    test('Query with custom context finds matches successfully', () => {
        const result = querySelectorAll('.target', jsdomDocument);

        expect(result.length).toBe(2);
    });

    test('Query with no matches returns empty array', () => {
        const result = querySelectorAll('.foo');

        expect(result).toEqual([]);
    });
});
