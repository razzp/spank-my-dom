import { loadImage } from './loadImage';

/**
 * Load one or more images asynchronously.
 * @since 0.2.0
 *
 * @param {string[]} paths The image(s) to load.
 *
 * @returns {Promise<HTMLImageElement[]>}
 */
function loadImages(...paths: string[]): Promise<HTMLImageElement[]> {
    return Promise.all(paths.map(loadImage));
}

export { loadImages };
