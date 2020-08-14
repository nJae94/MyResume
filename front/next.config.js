const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withCss = require('@zeit/next-css');

module.exports = withImages(withCss(withSass({
  cssModules: true,
  esModule: true,
  webpack(config, options) {
    
    return config
  },

    sassLoaderOptions: {
        
        includePaths: ["absolute/path/a", "absolute/path/b"]
    }
})));

