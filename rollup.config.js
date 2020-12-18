import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import packageJSON from './package.json';

export default [
  {
    input: './src/index.js',
    output: {
      file: packageJSON.main,
      format: 'cjs'
    },
    external: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-media'
    ],
    plugins: [
      postcss({
        extract: false,
        modules: true,
        use: ['sass']
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      external(),
      resolve(),
      commonjs()
    ]
  }
];
