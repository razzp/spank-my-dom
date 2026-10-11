[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / find

# Function: find()

## Call Signature

> **find**\<`K`\>(`selectors`, `context?`): `HTMLElementTagNameMap`\[`K`\] \| `null`

Returns the first element within context that matches the given selectors.

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

`HTMLElementTagNameMap`\[`K`\] \| `null`

### Examples

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

## Call Signature

> **find**\<`K`\>(`selectors`, `context?`): `MathMLElementTagNameMap`\[`K`\] \| `null`

Returns the first element within context that matches the given selectors.

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

`MathMLElementTagNameMap`\[`K`\] \| `null`

### Examples

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

## Call Signature

> **find**\<`K`\>(`selectors`, `context?`): `SVGElementTagNameMap`\[`K`\] \| `null`

Returns the first element within context that matches the given selectors.

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

`SVGElementTagNameMap`\[`K`\] \| `null`

### Examples

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

## Call Signature

> **find**\<`T`\>(`selectors`, `context?`): `T` \| `null`

Returns the first element within context that matches the given selectors.

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

`T` \| `null`

### Examples

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
