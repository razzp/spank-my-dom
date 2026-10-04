[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / removeStyles

# Function: removeStyles()

> **removeStyles**(`element`, `props`): `void`

Defined in: [src/manipulation/removeStyles.ts:14](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/manipulation/removeStyles.ts#L14)

Remove styles from an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to remove styles from.

### props

`string`[]

The styles to remove.

## Returns

`void`

## Example

```ts
removeStyles(document.documentElement, ['--foo']);
```
