[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / waitForReadyState

# Function: waitForReadyState()

> **waitForReadyState**(`state`): `Promise`\<`void`\>

Defined in: [src/utils/waitForReadyState.ts:34](https://github.com/razzp/spank-my-dom/blob/70f7b9d720dafd3d6a0da2507923a99a765de5df/src/utils/waitForReadyState.ts#L34)

Create a `Promise` that will resolve once the document reaches the
specified `readyState`, or immediately if it already has.

## Parameters

### state

`DocumentReadyState`

The state to wait for.

## Returns

`Promise`\<`void`\>

## Examples

Wait for the document `readyState` to reach `interactive`. This can be
used as an alternative to the `DOMContentLoaded` event.
```ts
await waitForReadyState('interactive');
```

Wait for the document `readyState` to reach `complete`. This can be
used as an alternative to the `load` event.
```ts
await waitForReadyState('complete');
```
