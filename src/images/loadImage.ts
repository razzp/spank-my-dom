/**
 * Load an image asynchronously.
 *
 * @param path - The image to load.
 *
 * @example
 * Load an image.
 * ```ts
 * const image = await loadImage('path/foo.jpg');
 * ```
 *
 * @example
 * Load multiple images.
 * ```ts
 * const paths = ['path/foo.jpg', 'path/bar.jpg'];
 * const images = await Promise.all(paths.map(loadImage));
 * ```
 *
 * @public
 */
function loadImage(path: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.src = path;

        image
            .decode()
            .then(() => resolve(image))
            .catch(reject);
    });
}

export { loadImage };
