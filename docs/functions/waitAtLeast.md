[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / waitAtLeast

# Function: waitAtLeast()

> **waitAtLeast**\<`T`\>(`delay`, `promise`): `Promise`\<`T`\>

Defined in: [src/utils/waitAtLeast.ts:27](https://github.com/razzp/spank-my-dom/blob/9765def7cda1c175f0b76ea00299cc19bfa7b639/src/utils/waitAtLeast.ts#L27)

Given a `Promise`, wait a minimum period of time before resolving.

## Type Parameters

### T

`T`

## Parameters

### delay

`number`

The minimum wait time in milliseconds.

### promise

`Promise`\<`T`\> \| `PromiseLike`\<`T`\>

The `Promise` to wait for.

## Returns

`Promise`\<`T`\>

## Remarks

Useful for delaying near instantaneous actions that might affect UI.

## Examples

Wait at least 1000ms for a single promise.
```ts
const result = await waitAtLeast(1000, Promise.resolve('foo));
```

Wait at least 1000ms for multiple promises using `Promise.all()`.
```ts
const [result1, result2] = await waitAtLeast(
    1000,
    Promise.all([Promise.resolve('foo'), Promise.resolve('bar')]),
);
```
