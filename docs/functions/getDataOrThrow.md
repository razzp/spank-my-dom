[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getDataOrThrow

# Function: getDataOrThrow()

> **getDataOrThrow**\<`T`\>(`element`, `name`, `reviver?`): `T`

Defined in: [src/retrieval/getDataOrThrow.ts:38](https://github.com/razzp/spank-my-dom/blob/70f7b9d720dafd3d6a0da2507923a99a765de5df/src/retrieval/getDataOrThrow.ts#L38)

Get a data attribute's value from an element, optionally passing
it through a reviver function to transform its value.

## Type Parameters

### T

`T` = `string`

## Parameters

### element

`HTMLElement`

The element to get the data from.

### name

`string`

The name of the data attribute.

### reviver?

(`value`) => `T`

A function to transform the result.

## Returns

`T`

## Throws

SyntaxError - If no data is found.

## Examples

Get an element's data.
```ts
const result = getDataOrThrow(element, 'foo');
```

Get an element's data and transform the result.
```ts
const result = getDataOrThrow(element, 'foo', (value) => `The value is: ${value}`);
```

Get an element's data and parse as a number.
```ts
const result = getDataOrThrow(element, 'foo', parseFloat);
```

Get an element's data and parse as a boolean (using [parseBoolean](parseBoolean.md)).
```ts
const result = getDataOrThrow(element, 'foo', parseBoolean);
```
