[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / findClosest

# Function: findClosest()

## Call Signature

> **findClosest**\<`K`\>(`element`, `selectors`, `skipSelf?`): `HTMLElementTagNameMap`\[`K`\] \| `null`

Traverse the DOM until an element is found that matches the selectors.

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

`HTMLElementTagNameMap`\[`K`\] \| `null`

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosest(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosest(element, '.foo', true);
```

## Call Signature

> **findClosest**\<`K`\>(`element`, `selectors`, `skipSelf?`): `MathMLElementTagNameMap`\[`K`\] \| `null`

Traverse the DOM until an element is found that matches the selectors.

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

`MathMLElementTagNameMap`\[`K`\] \| `null`

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosest(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosest(element, '.foo', true);
```

## Call Signature

> **findClosest**\<`K`\>(`element`, `selectors`, `skipSelf?`): `SVGElementTagNameMap`\[`K`\] \| `null`

Traverse the DOM until an element is found that matches the selectors.

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

`SVGElementTagNameMap`\[`K`\] \| `null`

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosest(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosest(element, '.foo', true);
```

## Call Signature

> **findClosest**\<`T`\>(`element`, `selectors`, `skipSelf?`): `T` \| `null`

Traverse the DOM until an element is found that matches the selectors.

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

`T` \| `null`

### Examples

Traverse the element and its parents until a match is found.
```ts
const result = findClosest(element, '.foo');
```

Traverse the element's parents only, until a match is found.
```ts
const result = findClosest(element, '.foo', true);
```
