/**
 * An optional configuration object for `getFormData`.
 *
 * @public
 */
interface GetFormDataOptions {
    /**
     * Additional entries to add to the `FormData` object. All values
     * except for `File` objects will be converted to strings.
     */
    additionalEntries?: { [key: string]: unknown };
    /**
     * Cherry-pick the form fields you want. Useful in very large forms where
     * only a few fields are required. Does **not** affect `additionalEntries`.
     */
    filterFields?: string[];
}

/**
 * Create a `FormData` object representing form fields and their values.
 *
 * @param form - The form to use.
 * @param options - An optional configuration object.
 *
 * @example
 * Get a `FormData` object representing a form element.
 * ```ts
 * const formData = getFormData(formElement);
 * ```
 *
 * @example
 * Provide additional entries that will be added to the `FormData` object.
 * ```ts
 * const formData = getFormData(formElement, {
 *     additionalEntries: {
 *         foo: 'bar',
 *     },
 * });
 * ```
 *
 * @example
 * Cherry-pick specific form fields to be added to the `FormData` object.
 * ```ts
 * const formData = getFormData(formElement, {
 *     filterFields: ['foo', 'bar'],
 * });
 * ```
 *
 * @public
 */
function getFormData(
    form: HTMLFormElement,
    options?: GetFormDataOptions,
): FormData {
    const { additionalEntries, filterFields } = { ...options };
    const data = new FormData(form);
    const output = filterFields ? new FormData() : data;

    if (filterFields) {
        for (const [key, value] of [...data].filter(([key]) =>
            filterFields.includes(key),
        )) {
            output.append(key, value);
        }
    }

    if (additionalEntries) {
        for (const [key, value] of Object.entries(additionalEntries)) {
            output.append(key, value instanceof File ? value : String(value));
        }
    }

    return output;
}

export { getFormData, type GetFormDataOptions };
