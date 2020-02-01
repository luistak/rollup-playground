import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const plugins = [
  cleanup(),
  typescript({
    objectHashIgnoreUnknownHack: true,
    rollupCommonJSResolveHack: true,
    clean: true
  })
];

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom'
  ],
  plugins: plugins.concat(cleaner({ targets: ['dist/'] }))
}