const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({
  esModule: true,
  webpack(config, options) {
    return config
  },
  
    sassLoaderOptions: {
        cssModules: true,
        includePaths: ["absolute/path/a", "absolute/path/b"]
      }
}));

