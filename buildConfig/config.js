const { entryPoints } = require('./entryPoints');

exports.config = {
  entryPoints,
  bundle: true,
  minify: true,
  outdir: 'dist',
}