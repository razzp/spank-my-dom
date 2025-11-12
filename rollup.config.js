import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/spank-my-dom.cjs',
            format: 'cjs',
        },
        {
            file: 'dist/spank-my-dom.js',
            format: 'esm',
        },
    ],
    plugins: [typescript()],
};
