[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / parseJson

# Function: parseJson()

> **parseJson**\<`T`\>(`input`, `reviver?`): `T`

Defined in: [src/conversion/parseJson.ts:27](https://github.com/razzp/spank-my-dom/blob/70f7b9d720dafd3d6a0da2507923a99a765de5df/src/conversion/parseJson.ts#L27)

Convert a JSON string into an object.

## Type Parameters

### T

`T` = `any`

## Parameters

### input

`string`

The JSON string to parse.

### reviver?

(`this`, `key`, `value`) => `any`

A function that transforms the results.

## Returns

`T`

## Remarks

The purpose of this function is simply to allow type inference.
At runtime this is synonymous with calling [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

## Throws

SyntaxError - If `input` is not valid JSON.

## Example

```ts
interface Model {
    foo: string;
}

const parsed = parseJson<Model>('{"foo":"bar"}');
```
