[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / onElementAdded

# Function: onElementAdded()

> **onElementAdded**\<`T`\>(`tagName`, `callback`, `options?`): `void`

Defined in: [src/events/onElementAdded.ts:70](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementAdded.ts#L70)

Create an observer that will wait for specific elements to be
added to the DOM later, optionally filtered by CSS selectors.

## Type Parameters

### T

`T` *extends* keyof `HTMLElementTagNameMap`

## Parameters

### tagName

`T`

The type of element to observe for.

### callback

(`element`) => `void`

The function called for added elements.

### options?

[`OnElementAddedOptions`](../interfaces/OnElementAddedOptions.md)

An optional configuration object.

## Returns

`void`

## Remarks

Uses the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) interface internally.

## Examples

Observe the entire document for new elements of the given type.
```ts
onElementAdded('div', (element) => {
    console.log(element);
});
```

Filter matched elements by providing CSS selectors.
```ts
onElementAdded(
    'div',
    (element) => {
        console.log(element);
    },
    {
        selectors: '.foo',
    },
);
```

Narrow observation to a specific context.
```ts
onElementAdded(
    'div',
    (element) => {
        console.log(element);
    },
    {
        context: contextElement,
    },
);
```
