const path = require('path')
const getRoutes = require('./config/routes')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  // Disallow pages as route
  useFileSystemPublicRoutes: false,

  // Define routes
  exportPathMap: getRoutes,

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
        'reactis/types': path.resolve(__dirname, 'redux/types'),
        'reactis/config': path.resolve(__dirname, 'config/')
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

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  },

}