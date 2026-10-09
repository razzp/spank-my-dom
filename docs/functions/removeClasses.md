[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / removeClasses

# Function: removeClasses()

> **removeClasses**(`element`, `classes`): `void`

Remove one or more classes from an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to remove classes from.

### classes

(`string` \| \{\[`token`: `string`\]: `boolean` \| ((`token`) => `boolean`); \})[]

The class(es) to remove from the element.

## Returns

`void`

## Examples

```ts
removeClasses(element, ['foo', 'bar']);
```

Remove classes based on a condition.
```ts
removeClasses(element, [
    {
        'foo': true,
    },
    {
        'bar': (token) => true,
    },
]);
```
