[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / onPixelRatioChanged

# Function: onPixelRatioChanged()

> **onPixelRatioChanged**(`callback`, `options?`): `void`

Defined in: [src/events/onPixelRatioChanged.ts:29](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/events/onPixelRatioChanged.ts#L29)

Create a listener that will fire a callback whenever the
pixel ratio of the current window changes.

## Parameters

### callback

(`pixelRatio`) => `void`

The function called when the pixel ratio changes.

### options?

[`OnPixelRatioChangedOptions`](../interfaces/OnPixelRatioChangedOptions.md)

An optional configuration object.

## Returns

`void`

## Example

```ts
onPixelRatioChanged((pixelRatio) => {
    console.log(pixelRatio);
});
```
