[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findClosestOrThrow

# Function: findClosestOrThrow()

## Call Signature

> **findClosestOrThrow**\<`K`\>(`element`, `selectors`, `skipSelf?`): `HTMLElementTagNameMap`\[`K`\]

Traverse the DOM until an element is found that matches the selectors,
or throws if nothing is found.

### Type Parameters

#### K

`K` *extends* keyof `HTMLElementTagNameMap`

### Parameters

#### element

`Element`

The element from which to search.

#### selectors

`K`

One or more selectors to match.

#### skipSelf?

`boolean`

Ignore `element` and begin the search on its parent.

### Returns

`HTMLElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo', true);
```

## Call Signature

> **findClosestOrThrow**\<`K`\>(`element`, `selectors`, `skipSelf?`): `MathMLElementTagNameMap`\[`K`\]

Traverse the DOM until an element is found that matches the selectors,
or throws if nothing is found.

### Type Parameters

#### K

`K` *extends* keyof `MathMLElementTagNameMap`

### Parameters

#### element

`Element`

The element from which to search.

#### selectors

`K`

One or more selectors to match.

#### skipSelf?

`boolean`

Ignore `element` and begin the search on its parent.

### Returns

`MathMLElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo', true);
```

## Call Signature

> **findClosestOrThrow**\<`K`\>(`element`, `selectors`, `skipSelf?`): `SVGElementTagNameMap`\[`K`\]

Traverse the DOM until an element is found that matches the selectors,
or throws if nothing is found.

### Type Parameters

#### K

`K` *extends* keyof `SVGElementTagNameMap`

### Parameters

#### element

`Element`

The element from which to search.

#### selectors

`K`

One or more selectors to match.

#### skipSelf?

`boolean`

Ignore `element` and begin the search on its parent.

### Returns

`SVGElementTagNameMap`\[`K`\]

### Throws

Error - If no match is found.

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo', true);
```

## Call Signature

> **findClosestOrThrow**\<`T`\>(`element`, `selectors`, `skipSelf?`): `T`

Traverse the DOM until an element is found that matches the selectors,
or throws if nothing is found.

### Type Parameters

#### T

`T` *extends* `Element`

### Parameters

#### element

`Element`

The element from which to search.

#### selectors

`string`

One or more selectors to match.

#### skipSelf?

`boolean`

Ignore `element` and begin the search on its parent.

### Returns

`T`

### Throws

Error - If no match is found.

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosestOrThrow(element, '.foo', true);
```
