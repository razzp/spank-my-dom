[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / arrayOf

# Function: arrayOf()

## Call Signature

> **arrayOf**\<`T`\>(`size`, `value`): `ReturnType`\<`T`\>[]

Create an array of N size and fill it with either a static value,
or the result of a predicate function.

### Type Parameters

#### T

`T` *extends* (`index`) => `unknown`

### Parameters

#### size

`number`

The size of the array.

#### value

`T`

The value to fill the array with.

### Returns

`ReturnType`\<`T`\>[]

### Examples

Create an array of duplicate values.
```ts
const array = arrayOf(5, 'foo');
// Result: ['foo', 'foo', 'foo', 'foo', 'foo']
```

Create an array using a predicate function.
```ts
const array = arrayOf(5, (index) => index));
// Result: [0, 1, 2, 3, 4]
```

Create an array using of Class instances.
```ts
const array = arrayOf(5, () => new Foo()));
// Result: [Foo, Foo, Foo, Foo, Foo]
```

## Call Signature

> **arrayOf**\<`T`\>(`size`, `value`): `T`[]

Create an array of N size and fill it with either a static value,
or the result of a predicate function.

### Type Parameters

#### T

`T`

### Parameters

#### size

`number`

The size of the array.

#### value

`T`

The value to fill the array with.

### Returns

`T`[]

### Examples

Create an array of duplicate values.
```ts
const array = arrayOf(5, 'foo');
// Result: ['foo', 'foo', 'foo', 'foo', 'foo']
```

Create an array using a predicate function.
```ts
const array = arrayOf(5, (index) => index));
// Result: [0, 1, 2, 3, 4]
```

Create an array using of Class instances.
```ts
const array = arrayOf(5, () => new Foo()));
// Result: [Foo, Foo, Foo, Foo, Foo]
```
