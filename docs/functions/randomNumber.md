[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / randomNumber

# Function: randomNumber()

> **randomNumber**(`min`, `max`): `number`

Generate a random number within a specified range.

## Parameters

### min

`number`

The minimum number to generate.

### max

`number`

The maximum number to generate.

## Returns

`number`

## Remarks

Can return a floating-point number. If you want to ensure a whole number
is always generated, consider using [randomInt](randomInt.md) instead.

## Example

Generate a random number.
```ts
const result = randomNumber(-10, 10);
```
