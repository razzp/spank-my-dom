[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / setClasses

# Function: setClasses()

> **setClasses**(`element`, `classes`): `void`

Set one or more classes on an element.

## Parameters

### element

`HTMLElement` \| `SVGElement` \| `MathMLElement`

The element to add classes to.

### classes

(`string` \| \{\[`token`: `string`\]: `boolean` \| ((`token`) => `boolean`); \})[]

The class(es) to add to the element.

## Returns

`void`

## Examples

```ts
setClasses(element, ['foo', 'bar']);
```

Add classes based on a condition.
```ts
setClasses(element, [
    {
        'foo': true,
    },
    {
        'bar': (token) => true,
    },
]);
```
