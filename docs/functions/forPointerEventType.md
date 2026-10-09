[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / forPointerEventType

# Function: forPointerEventType()

> **forPointerEventType**\<`T`\>(`pointerType`, `callback`): (`event`) => `void`

Create a listener that only fires if the event
was caused by a specific pointer type.

## Type Parameters

### T

`T` *extends* `PointerEvent`

## Parameters

### pointerType

[`PointerEventType`](../type-aliases/PointerEventType.md)

The pointer type to use.

### callback

(`event`) => `void`

The callback function.

## Returns

(`event`) => `void`

## Example

```ts
forPointerEventType('mouse', (event) => {
   // Event was caused by a mouse.
});
```
