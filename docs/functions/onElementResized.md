[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / onElementResized

# Function: onElementResized()

> **onElementResized**\<`T`\>(`element`, `callback`, `options?`): `void`

Defined in: [src/events/onElementResized.ts:50](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementResized.ts#L50)

Create an observer that will fire a callback whenever an element is resized.

## Type Parameters

### T

`T` *extends* `Element`

## Parameters

### element

`T`

The element to observe.

### callback

(`data`) => `void`

The function to call when the element is resized.

### options?

[`OnElementResizedOptions`](../interfaces/OnElementResizedOptions.md)

An optional configuration object.

## Returns

`void`

## Remarks

Uses the [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API) internally.

## Example

Wait for an element to be resized.
```ts
onElementResized(element, ({entry}) => {
    // Element was resized.
    console.log(`Element is ${entry.borderBoxSize.blockSize}px in height.`);
});
```
