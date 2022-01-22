exports.config = function (entryPoints) {
  return {
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: 'build',
  }
};