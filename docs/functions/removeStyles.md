[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / removeStyles

# Function: removeStyles()

> **removeStyles**(`element`, `props`): `void`

Remove styles from an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to remove styles from.

### props

(`string` \| \{\[`prop`: `string`\]: `boolean` \| ((`prop`) => `boolean`); \})[]

The styles to remove.

## Returns

`void`

## Examples

```ts
removeStyles(document.documentElement, ['--foo', '--bar']);
```

Remove styles based on a condition.
```ts
removeStyles(document.documentElement, [
    {
        '--foo': true,
    },
    {
        '--bar': (value) => true,
    }
]);
```
