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
