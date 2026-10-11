[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / DelegateEvent

# Interface: DelegateEvent\<T\>

The event data returned in the callback.

## Type Parameters

### T

`T`

## Properties

### delegateTarget

> **delegateTarget**: `Element`

The target that has been matched.

***

### event

> **event**: `T`

The original Event object.

#### Remarks

Be aware that `currentTarget` will be `null`.
See: [https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

***

### stopDelegation

> **stopDelegation**: () => `void`

Stop any further matches as the event bubbles.

#### Returns

`void`
