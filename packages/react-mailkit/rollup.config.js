import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';

import pkg from './package.json';

// Specify the extensions
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// Check the environment if it is production
const isProduction = process.env.NODE_ENV === 'production';

// Get the name for package.json
const moduleName = pkg.name.replace(/^@.*\//, '');

// Create a banner for bundles.
const banner = `
  /**
   * @license
   * author: ${pkg.author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default (async () => [
  // browser-friendly UMD build
  {
    input: './src/browser.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: moduleName,
      banner,
      sourcemap: isProduction ? false : 'inline'
    },
    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {})
    ],
    plugins: [
      json(),
      nodePolyfills(),
      // Allows node_modules resolution
      resolve({ extensions }),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs({ include: /node_modules/ }),
      // Compile TypeScript/JavaScript files
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions
      }),
      // Only in production mode
      isProduction && (await import('rollup-plugin-terser')).terser()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: './src/index.ts',
    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {})
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner,
        sourcemap: isProduction ? false : 'inline'
      },
      {
        file: pkg.module,
        format: 'es',
        banner,
        sourcemap: isProduction ? false : 'inline'
      }
    ],
    plugins: [
      json(),
      nodePolyfills(),
      // Allows node_modules resolution
      resolve({ extensions }),
      nodeResolve(),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs({ include: /node_modules/ }),
      // Compile TypeScript/JavaScript files
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions
      }),
      // Only in production mode
      isProduction && (await import('rollup-plugin-terser')).terser()
    ]
  },
  {
    // path to your declaration files root
    input: './dist/dts/index.d.ts',
    output: [{ file: pkg.types, format: 'umd' }],
    plugins: [dts()]
  }
])();
