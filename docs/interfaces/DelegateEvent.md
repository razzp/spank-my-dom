[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / DelegateEvent

# Interface: DelegateEvent\<T\>

Defined in: [src/events/delegate.ts:6](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/events/delegate.ts#L6)

The event data returned in the callback.

## Type Parameters

### T

`T`

## Properties

### delegateTarget

> **delegateTarget**: `Element`

Defined in: [src/events/delegate.ts:10](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/events/delegate.ts#L10)

The target that has been matched.

***

### event

> **event**: `T`

Defined in: [src/events/delegate.ts:18](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/events/delegate.ts#L18)

The original Event object.

#### Remarks

Be aware that `currentTarget` will be `null`.
See: [https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

***

### stopDelegation

> **stopDelegation**: () => `void`

Defined in: [src/events/delegate.ts:22](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/events/delegate.ts#L22)

Stop any further matches as the event bubbles.

#### Returns

`void`
