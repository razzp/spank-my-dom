[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getClosest

# Function: getClosest()

> **getClosest**\<`T`\>(`element`, `selectors`, `skipSelf?`): `T` \| `null`

Traverse the element (unless skipped) and its parents until
an element is found that matches the selectors.

## Type Parameters

### T

`T` *extends* `Element`

## Parameters

### element

`Element`

The element from which to search.

### selectors

`string`

One or more selectors to match.

### skipSelf?

`boolean` = `false`

Ignore `element` and begin the search on its parent.

## Returns

`T` \| `null`

## Examples

Traverse the element and its parents until a match is found.
```ts
const element = closest('.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const element = closest('.foo', true);
```
