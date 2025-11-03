/**
 * Create a `FormData` object representing form fields and their values.
 *
 * @param form - The form to use.
 * @param options - Optional arguments (TODO).
 *
 * @public
 */
function getFormData(
    form: HTMLFormElement,
    options?: { additionalProps?: { [key: string]: unknown } },
): FormData {
    const { additionalProps } = { ...options };
    const data = new FormData(form);

    if (additionalProps) {
        for (const [key, value] of Object.entries(additionalProps)) {
            data.append(key, String(value));
        }
    }

    return data;
}

export { getFormData };
