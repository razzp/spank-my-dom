[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / forPointerEventType

# Function: forPointerEventType()

> **forPointerEventType**\<`T`\>(`pointerType`, `callback`): (`event`) => `void`

Defined in: [src/events/forPointerEventType.ts:22](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/events/forPointerEventType.ts#L22)

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
