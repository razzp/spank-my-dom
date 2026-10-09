[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / loadImage

# Function: loadImage()

> **loadImage**(`path`): `Promise`\<`HTMLImageElement`\>

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
