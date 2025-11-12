/**
 * An optional configuration object for `getFormData`.
 *
 * @public
 */
type GetFormDataOptions = {
    /**
     * Additional entries to add to the `FormData` object.
     */
    additionalEntries?: { [key: string]: unknown };
};

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
 * @public
 */
function getFormData(
    form: HTMLFormElement,
    options?: GetFormDataOptions,
): FormData {
    const { additionalEntries } = { ...options };
    const data = new FormData(form);

    if (additionalEntries) {
        for (const [key, value] of Object.entries(additionalEntries)) {
            data.append(key, String(value));
        }
    }

    return data;
}

export { getFormData, type GetFormDataOptions };
