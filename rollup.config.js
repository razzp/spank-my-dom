import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

// Load any additional annotations (for JSDoc) that would otherwise be
// removed during the compilation process.
const annotations = fs.readFileSync('docs/annotations.js', 'utf8');

const config = {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/main.cjs',
            format: 'cjs',
            banner: annotations,
        },
        {
            file: 'dist/main.js',
            format: 'esm',
            banner: annotations,
        },
    ],
    plugins: [
        resolve({
            extensions: ['.ts'],
        }),
        typescript(),
    ],
};

export default config;
