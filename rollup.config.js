import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/main.cjs',
            format: 'cjs',
        },
        {
            file: 'dist/main.js',
            format: 'esm',
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
