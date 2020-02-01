import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';

const plugins = [
  cleanup(), // Remove comments, extra lines, spaces, unused code
  cleaner({ targets: ["dist/"] }) // remove evrything that is not used on the target dirs
];

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle-a.js',
      name: 'myBundle',
      format: 'umd'
    },
    plugins
  },
  {
    input: 'src/main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'esm'
      }
    ]
  }
];