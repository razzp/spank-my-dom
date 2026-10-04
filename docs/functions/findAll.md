[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findAll

# Function: findAll()

## Call Signature

> **findAll**\<`K`\>(`selectors`, `context?`): `HTMLElementTagNameMap`\[`K`\][]

Defined in: [src/retrieval/findAll.ts:31](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/retrieval/findAll.ts#L31)

Fins all descendant elements within a given context,
that also match the given selectors.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `HTMLElementTagNameMap`

### Parameters

#### selectors

`K`

One or more selectors to match.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`HTMLElementTagNameMap`\[`K`\][]

### Examples

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

## Call Signature

> **findAll**\<`K`\>(`selectors`, `context?`): `MathMLElementTagNameMap`\[`K`\][]

Defined in: [src/retrieval/findAll.ts:35](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/retrieval/findAll.ts#L35)

Fins all descendant elements within a given context,
that also match the given selectors.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `MathMLElementTagNameMap`

### Parameters

#### selectors

`K`

One or more selectors to match.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`MathMLElementTagNameMap`\[`K`\][]

### Examples

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

## Call Signature

> **findAll**\<`K`\>(`selectors`, `context?`): `SVGElementTagNameMap`\[`K`\][]

Defined in: [src/retrieval/findAll.ts:39](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/retrieval/findAll.ts#L39)

Fins all descendant elements within a given context,
that also match the given selectors.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `SVGElementTagNameMap`

### Parameters

#### selectors

`K`

One or more selectors to match.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`SVGElementTagNameMap`\[`K`\][]

### Examples

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

## Call Signature

> **findAll**\<`T`\>(`selectors`, `context?`): `T`[]

Defined in: [src/retrieval/findAll.ts:43](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/retrieval/findAll.ts#L43)

Fins all descendant elements within a given context,
that also match the given selectors.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### T

`T` *extends* `Element`

### Parameters

#### selectors

`string`

One or more selectors to match.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`T`[]

### Examples

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
