[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getFormData

# Function: getFormData()

> **getFormData**(`form`, `options?`): `FormData`

Defined in: [src/forms/getFormData.ts:51](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/forms/getFormData.ts#L51)

Create a `FormData` object representing form fields and their values.

## Parameters

### form

`HTMLFormElement`

The form to use.

### options?

[`GetFormDataOptions`](../interfaces/GetFormDataOptions.md)

An optional configuration object.

## Returns

`FormData`

## Examples

Get a `FormData` object representing a form element.
```ts
const formData = getFormData(formElement);
```

Provide additional entries that will be added to the `FormData` object.
```ts
const formData = getFormData(formElement, {
    additionalEntries: {
        foo: 'bar',
    },
});
```

Cherry-pick specific form fields to be added to the `FormData` object.
```ts
const formData = getFormData(formElement, {
    filterFields: ['foo', 'bar'],
});
```
