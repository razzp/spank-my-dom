[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findOrThrow

# Function: findOrThrow()

## Call Signature

> **findOrThrow**\<`K`\>(`selectors`, `context?`): `HTMLElementTagNameMap`\[`K`\]

Returns the first element within context that matches the
given selectors, or throws if nothing is found.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `HTMLElementTagNameMap`

### Parameters

#### selectors

`K`

The selectors to match against.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`HTMLElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

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

## Call Signature

> **findOrThrow**\<`K`\>(`selectors`, `context?`): `MathMLElementTagNameMap`\[`K`\]

Returns the first element within context that matches the
given selectors, or throws if nothing is found.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `MathMLElementTagNameMap`

### Parameters

#### selectors

`K`

The selectors to match against.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`MathMLElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

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

## Call Signature

> **findOrThrow**\<`K`\>(`selectors`, `context?`): `SVGElementTagNameMap`\[`K`\]

Returns the first element within context that matches the
given selectors, or throws if nothing is found.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### K

`K` *extends* keyof `SVGElementTagNameMap`

### Parameters

#### selectors

`K`

The selectors to match against.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`SVGElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

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

## Call Signature

> **findOrThrow**\<`T`\>(`selectors`, `context?`): `T`

Returns the first element within context that matches the
given selectors, or throws if nothing is found.

For runtime safety, consider using an assertion library such as
[Bossy Boots](https://github.com/razzp/bossy-boots).

### Type Parameters

#### T

`T` *extends* `Element`

### Parameters

#### selectors

`string`

The selectors to match against.

#### context?

`Element` \| `Document` \| `DocumentFragment`

The context from which to search from.

### Returns

`T`

### Throws

Error - If no match is found.

### Examples

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
