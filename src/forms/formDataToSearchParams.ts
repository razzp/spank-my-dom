/**
 * Takes a `FormData` object and converts it into a `URLSearchParams` object.
 *
 * @remarks
 * Useful in cases where you want to send data in`application/x-www-form-urlencoded`
 * format, or if you want to serialise a form's data using `URLSearchParams.toString()`.
 *
 * @param formData - The `FormData` object to convert.
 * @param options - Optional arguments (TODO).
 *
 * @public
 */
function formDataToSearchParams(
    formData: FormData,
    options?: {
        handleFile?: (file: File) => string;
    },
): URLSearchParams {
    const { handleFile } = {
        handleFile: (file: File) => file.name,
        ...options,
    };
    return new URLSearchParams(
        [...formData.entries()].map(([key, value]) => [
            key,
            value instanceof File ? handleFile(value) : value,
        ]),
    );
}

export { formDataToSearchParams };
