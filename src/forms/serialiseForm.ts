import { getFormData } from './getFormData';

function serialiseForm(
    form: HTMLFormElement,
    options?: {
        additionalProps?: { [key: string]: unknown };
        handleFile?: (file: File) => string;
    },
): string {
    const { handleFile } = {
        handleFile: (file: File) => file.name,
        ...options,
    };

    const params = new URLSearchParams(
        Array.from(getFormData(form, options), ([key, value]) => [
            key,
            typeof value === 'string' ? value : handleFile(value),
        ]),
    );

    return params.toString();
}

export { serialiseForm };

// TODO: JSDOC
