[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / onElementIntersected

# Function: onElementIntersected()

> **onElementIntersected**\<`T`\>(`threshold`, `element`, `callback`, `options?`): `void`

Defined in: [src/events/onElementIntersected.ts:54](https://github.com/razzp/spank-my-dom/blob/70f7b9d720dafd3d6a0da2507923a99a765de5df/src/events/onElementIntersected.ts#L54)

Create an observer that will fire a callback whenever
an element intersects a root element.

## Type Parameters

### T

`T` *extends* `Element`

## Parameters

### threshold

`number` \| `"completely"` \| `"partially"` \| `number`[]

The threshold at which the callback should be fired.

### element

`T`

The element to observe.

### callback

(`entry`, `element`) => `void`

The function to call when the element intersects.

### options?

[`OnElementIntersectedOptions`](../interfaces/OnElementIntersectedOptions.md)

An optional configuration object.

## Returns

`void`

## Remarks

Uses the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) internally.

## Examples

Wait for an element to intersect the root (default) completely.
```ts
onElementIntersected('completely', element, (entry) => {
    if (entry.isIntersecting) {
        console.log('Element has completely entered the viewport');
    } else {
        console.log('Element has completely left the viewport');
    }
});
```

Wait for an element to intersect the root (default) partially.
```ts
onElementIntersected('partially', element, (entry) => {
    if (entry.isIntersecting) {
        console.log('Element has partially entered the viewport');
    } else {
        console.log('Element has partially left the viewport');
    }
});
```
