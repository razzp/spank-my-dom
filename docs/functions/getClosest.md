[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getClosest

# Function: getClosest()

> **getClosest**\<`T`\>(`element`, `selectors`, `skipSelf?`): `T` \| `null`

Defined in: [src/traversal/getClosest.ts:23](https://github.com/razzp/spank-my-dom/blob/9765def7cda1c175f0b76ea00299cc19bfa7b639/src/traversal/getClosest.ts#L23)

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
