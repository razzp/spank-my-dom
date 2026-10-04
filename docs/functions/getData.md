[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getData

# Function: getData()

> **getData**\<`T`\>(`element`, `name`, `reviver?`): `T` \| `null`

Defined in: [src/retrieval/getData.ts:39](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/retrieval/getData.ts#L39)

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

`T` \| `null`

## Remarks

Undefined attributes are returned as `null` to maintain consistency with
other methods such as `querySelector()`, or `getAttribute()`.

## Examples

Get an element's data.
```ts
const result = getData(element, 'foo');
```

Get an element's data and transform the result.
```ts
const result = getData(element, 'foo', (value) => `The value is: ${value}`);
```

Get an element's data and parse as a number.
```ts
const result = getData(element, 'foo', parseFloat);
```

Get an element's data and parse as a boolean (using [parseBoolean](parseBoolean.md)).
```ts
const result = getData(element, 'foo', parseBoolean);
```
