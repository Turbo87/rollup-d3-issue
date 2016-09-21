import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'd3.js',
  dest: 'dist/d3.js',
  format: 'amd',
  moduleId: 'd3',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: false,
    })
  ]
};
