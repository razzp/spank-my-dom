[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / timed

# Function: timed()

> **timed**\<`T`\>(`func`): `Promise`\<[`TimedResult`](../interfaces/TimedResult.md)\<`Awaited`\<`T`\>\>\>

Defined in: [src/utils/timed.ts:53](https://github.com/razzp/spank-my-dom/blob/70f7b9d720dafd3d6a0da2507923a99a765de5df/src/utils/timed.ts#L53)

Wrap a function in a timer that will let you know how long it took to run.
This works for both asynchronous and long-running synchronous operations.

## Type Parameters

### T

`T`

## Parameters

### func

(`getTime`) => `T`

The function to time. Provides method `getTime()` to return
the elapsed time at any point during execution.

## Returns

`Promise`\<[`TimedResult`](../interfaces/TimedResult.md)\<`Awaited`\<`T`\>\>\>

## Examples

Time a function.
```ts
const { time, value } = await timed(async () => {
    await operation1(); // Takes 500ms
    await operation2(); // Takes 500ms

    return 'foo';
});

console.log(time); // 1000
console.log(value); // 'foo'
```

Time a function, and use the `getTime()` method to return the
elapsed time at some point during the function execution.
```ts
const { time, value } = await timed(async (getTime) => {
    await operation1(); // Takes 500ms
    console.log(getTime()); // 500
    await operation2(); // Takes 500ms
});

console.log(time); // 1000
```
