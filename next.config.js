// Get routes data
const routes = require('./routes').web
// Using Path
const path = require('path')

module.exports = {
  // Disallow pages as route
  useFileSystemPublicRoutes: false,

  // Define routes
  exportPathMap: async function () {
    return routes
  },

  // Webpack
  webpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.jsx', '.scss', '.css'],
      alias: {
        Components: path.resolve(__dirname, 'components/'),
        Elements: path.resolve(__dirname, 'components/elements/'),
        Utils: path.resolve(__dirname, 'components/utils/'),
        Hocs: path.resolve(__dirname, 'hocs/'),
        Actions: path.resolve(__dirname, 'redux/actions'),
        Moduls: path.resolve(__dirname, 'redux/moduls'),
        Types: path.resolve(__dirname, 'redux/types')
      }
    }
    
    // Modules
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: "eslint-loader"
    })

    return config
  },

}