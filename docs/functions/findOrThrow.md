[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findOrThrow

# Function: findOrThrow()

> **findOrThrow**\<`T`\>(`selectors`, `context?`): `T`

Defined in: [src/retrieval/findOrThrow.ts:39](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/retrieval/findOrThrow.ts#L39)

Returns the first element within context that matches the
given selectors, or throws if nothing is found.

## Type Parameters

### T

`T` *extends* `Element` = `HTMLElement`

## Parameters

### selectors

`string`

The selectors to match against.

### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

## Returns

`T`

## Remarks

Unlike using `querySelector()`, the default inferred element type is
`HTMLElement`, rather than `Element`. More often than not this is the
preferred behaviour, so it saves having to explicitly type it.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

## Throws

Error - If no match is found.

## Examples

Find an element using the entire document as context (default).
```ts
const element = find('.foo');
```

Find an element using another element as context.
```ts
const element = find('.foo', contextElement);
```

Infer the type of element using TypeScript.
```ts
const element = find<HTMLButtonElement>('.foo');
```
