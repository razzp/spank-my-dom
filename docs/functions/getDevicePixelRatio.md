[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getDevicePixelRatio

# Function: getDevicePixelRatio()

> **getDevicePixelRatio**(`options?`): `number`

Get the pixel ratio of the current device.

## Parameters

### options?

[`GetDevicePixelRatioOptions`](../interfaces/GetDevicePixelRatioOptions.md)

An optional configuration object.

## Returns

`number`

## Examples

```ts
const dpr = getDevicePixelRatio();
```

Manipulate the returned value.
```ts
const dpr = getDevicePixelRatio({
    max: 2,
    round: 'up',
});
```
