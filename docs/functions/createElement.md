[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / createElement

# Function: createElement()

> **createElement**\<`T`\>(`tagName`, `options?`): `HTMLElementTagNameMap`\[`T`\]

Creates a new element, allowing you to define properties
and child nodes at the same time.

## Type Parameters

### T

`T` *extends* keyof `HTMLElementTagNameMap`

## Parameters

### tagName

`T`

The type of element to create.

### options?

[`CreateElementOptions`](../interfaces/CreateElementOptions.md)\<`T`\>

An optional configuration object.

## Returns

`HTMLElementTagNameMap`\[`T`\]

## Examples

Create a new element.
```ts
const element = createElement('div');
```

Create an element with a full range of options defined.
```ts
const element = createElement('div', {
    content: 'Hello World',
    attributes: {
        ariaHidden: 'true',
    },
    classes: ['foo', 'bar'],
    styles: {
        color: 'rebeccapurple',
    },
    data: {
        baz: 'qux',
    },
    prepend: [node],
    append: [node],
});
```
