[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / pickRandomN

# Function: pickRandomN()

> **pickRandomN**\<`T`\>(`array`, `amount`): `T`\[`number`\][]

Pick a specified number of items from a randomised array.

## Type Parameters

### T

`T` *extends* readonly `unknown`[]

## Parameters

### array

`T`

The array from which to pick.

### amount

`number`

The number of items to pick.

## Returns

`T`\[`number`\][]

## Remarks

Uses the [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle), which runs in O(n) time.
