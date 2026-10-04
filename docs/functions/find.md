[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / find

# Function: find()

> **find**\<`T`\>(`selectors`, `context?`): `T` \| `null`

Defined in: [src/retrieval/find.ts:35](https://github.com/razzp/spank-my-dom/blob/9765def7cda1c175f0b76ea00299cc19bfa7b639/src/retrieval/find.ts#L35)

Returns the first element within context that matches the given selectors.

## Type Parameters

### T

`T` *extends* `Element` = `HTMLElement`

## Parameters

### selectors

`string`

One or more selectors to match.

### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

## Returns

`T` \| `null`

## Remarks

Unlike using `querySelector()`, the default inferred element type is
`HTMLElement`, rather than `Element`. More often than not this is the
preferred behaviour, so it saves having to explicitly type it.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

## Examples

Find an element using the entire document as context (default).
```ts
const element = find('.foo');
```

Find an element using another element as context.
```ts
const element = find('.foo', contextElement);
```

Infer the type of element using the generic `find<T>`.
```ts
const element = find<HTMLButtonElement>('.foo');
```
