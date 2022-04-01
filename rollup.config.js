import resolve from '@rollup/plugin-node-resolve';
//import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/main.ts',
    output: [
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
        //terser()
    ],
};

export default config;
