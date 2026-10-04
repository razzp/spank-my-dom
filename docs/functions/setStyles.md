[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / setStyles

# Function: setStyles()

> **setStyles**(`element`, `props`): `void`

Defined in: [src/manipulation/setStyles.ts:16](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/manipulation/setStyles.ts#L16)

Set styles on an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to set styles on.

### props

`Record`\<`string`, `string`\>

The styles to add.

## Returns

`void`

## Example

```ts
setStyles(document.documentElement, {
    '--foo': '10px',
});
```
