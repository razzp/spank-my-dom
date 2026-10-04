[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / onPixelRatioChanged

# Function: onPixelRatioChanged()

> **onPixelRatioChanged**(`callback`, `options?`): `void`

Defined in: [src/events/onPixelRatioChanged.ts:29](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/events/onPixelRatioChanged.ts#L29)

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
