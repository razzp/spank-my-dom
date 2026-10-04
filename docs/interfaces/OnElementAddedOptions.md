[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / OnElementAddedOptions

# Interface: OnElementAddedOptions

Defined in: [src/events/onElementAdded.ts:6](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementAdded.ts#L6)

An optional configuration object for `onElementAdded`.

## Properties

### context?

> `optional` **context?**: `Element` \| `Document` \| `DocumentFragment`

Defined in: [src/events/onElementAdded.ts:10](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementAdded.ts#L10)

The context from which to observe from (defaults to `document`)

***

### selectors?

> `optional` **selectors?**: `string`

Defined in: [src/events/onElementAdded.ts:14](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementAdded.ts#L14)

One or more selectors to match on the observed elements.

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [src/events/onElementAdded.ts:18](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/events/onElementAdded.ts#L18)

An `AbortSignal` that can be used to cancel the observer.
