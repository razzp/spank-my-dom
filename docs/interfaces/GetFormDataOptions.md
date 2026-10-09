[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / GetFormDataOptions

# Interface: GetFormDataOptions

An optional configuration object for `getFormData`.

## Properties

### additionalEntries?

> `optional` **additionalEntries?**: `object`

Additional entries to add to the `FormData` object. All values
except for `File` objects will be converted to strings.

#### Index Signature

\[`key`: `string`\]: `unknown`

***

### filterFields?

> `optional` **filterFields?**: `string`[]

Cherry-pick the form fields you want. Useful in very large forms where
only a few fields are required. Does **not** affect `additionalEntries`.
