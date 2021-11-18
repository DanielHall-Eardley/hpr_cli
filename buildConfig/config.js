exports.config = function (entryPoints) {
  return {
    entryPoints,
    bundle: true,
    minify: true,
    outdir: 'dist',
  }
}