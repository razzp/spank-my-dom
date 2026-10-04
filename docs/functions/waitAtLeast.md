[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / waitAtLeast

# Function: waitAtLeast()

> **waitAtLeast**\<`T`\>(`delay`, `promise`): `Promise`\<`T`\>

Defined in: [src/utils/waitAtLeast.ts:27](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/utils/waitAtLeast.ts#L27)

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
