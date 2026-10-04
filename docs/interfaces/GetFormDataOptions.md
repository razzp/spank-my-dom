[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / GetFormDataOptions

# Interface: GetFormDataOptions

Defined in: [src/forms/getFormData.ts:6](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/forms/getFormData.ts#L6)

An optional configuration object for `getFormData`.

## Properties

### additionalEntries?

> `optional` **additionalEntries?**: `object`

Defined in: [src/forms/getFormData.ts:11](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/forms/getFormData.ts#L11)

Additional entries to add to the `FormData` object. All values
except for `File` objects will be converted to strings.

#### Index Signature

\[`key`: `string`\]: `unknown`

***

### filterFields?

> `optional` **filterFields?**: `string`[]

Defined in: [src/forms/getFormData.ts:16](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/forms/getFormData.ts#L16)

Cherry-pick the form fields you want. Useful in very large forms where
only a few fields are required. Does **not** affect `additionalEntries`.
