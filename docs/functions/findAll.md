[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findAll

# Function: findAll()

> **findAll**\<`T`\>(`selectors`, `context?`): `T`[]

Defined in: [src/retrieval/findAll.ts:36](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/retrieval/findAll.ts#L36)

Fins all descendant elements within a given context,
that also match the given selectors.

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

`T`[]

## Remarks

Unlike using `querySelectorAll()`, the default inferred element type is
`HTMLElement`, rather than `Element`. More often than not this is the
preferred behaviour, so it saves having to explicitly type it.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

## Examples

Find elements using the entire document as context (default).
```ts
const elements = findAll('.foo');
```

Find elements using another element as context.
```ts
const elements = findAll('.foo', contextElement);
```

Infer the type of elements using TypeScript.
```ts
const elements = findAll<HTMLButtonElement>('.foo');
```
