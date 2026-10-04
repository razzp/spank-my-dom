[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / loadImage

# Function: loadImage()

> **loadImage**(`path`): `Promise`\<`HTMLImageElement`\>

Defined in: [src/images/loadImage.ts:21](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/images/loadImage.ts#L21)

Load an image asynchronously.

## Parameters

### path

`string`

The image to load.

## Returns

`Promise`\<`HTMLImageElement`\>

## Examples

Load an image.
```ts
const image = await loadImage('path/foo.jpg');
```

Load multiple images.
```ts
const paths = ['path/foo.jpg', 'path/bar.jpg'];
const images = await Promise.all(paths.map(loadImage));
```
