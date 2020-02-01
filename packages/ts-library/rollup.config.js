import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const plugins = [
  cleanup(), // Remove comments, extra lines, spaces, unused code
  typescript({ objectHashIgnoreUnknownHack: true }), // Transpile typescript // remove everything that is not used on the target dirs,
];

export default {
  input: 'src/main.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    clean: true
  },
  plugins: [...plugins, cleaner({ targets: ["dist/"] })]
}