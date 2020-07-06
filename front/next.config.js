const withSass = require('@zeit/next-sass');
module.exports = withSass({
    sassLoaderOptions: {
        cssModules: true,
        includePaths: ["absolute/path/a", "absolute/path/b"]
      }
});