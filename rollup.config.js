import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const config = {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/main.js',
            format: 'esm',
            banner: fs.readFileSync('docs/annotations.js', 'utf8'),
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
