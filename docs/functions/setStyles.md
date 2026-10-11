[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / setStyles

# Function: setStyles()

> **setStyles**(`element`, `props`): `void`

Set styles on an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to set styles on.

### props

The style properties to add.

## Returns

`void`

## Examples

```ts
setStyles(document.documentElement, {
    '--foo': '10px',
    '--bar': '20px',
});
```

Set styles based on a condition.
```ts
setStyles(document.documentElement, {
    '--foo': {
        value: '10px',
        condition: true,
    },
    '--bar': {
        value: '20px',
        condition: (prop, value) => true,
    },
});
```
