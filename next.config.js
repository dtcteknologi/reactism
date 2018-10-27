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
  webpack: (config, { dev }) => {
    // Resolve path
    config.resolve = {
      extensions: ['.js', '.jsx', '.scss', '.css'],
      alias: {
        'reactis/components': path.resolve(__dirname, 'components/'),
        'reactis/elements': path.resolve(__dirname, 'components/elements/'),
        'reactis/utils': path.resolve(__dirname, 'components/utilities/'),
        'reactis/layout': path.resolve(__dirname, 'components/pageLayouts/'),
        'reactis/hocs': path.resolve(__dirname, 'hocs/'),
        'reactis/actions': path.resolve(__dirname, 'redux/actions'),
        'reactis/moduls': path.resolve(__dirname, 'redux/moduls'),
        'reactis/types': path.resolve(__dirname, 'redux/types')
      },
    }
    
    config.node = {
      fs: 'empty'
    }
    
    // Modules
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          quiet: true,
        }
      })
    }

    return config
  },

}