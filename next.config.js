const path = require('path')
const getRoutes = require('./config/routes')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const aliases = {
  'reactism/components': path.resolve(__dirname, 'components/'),
  'reactism/elements': path.resolve(__dirname, 'components/elements/'),
  'reactism/utils': path.resolve(__dirname, 'components/utilities/'),
  'reactism/layout': path.resolve(__dirname, 'components/pageLayouts/'),
  'reactism/hocs': path.resolve(__dirname, 'hocs/'),
  'reactism/actions': path.resolve(__dirname, 'redux/actions'),
  'reactism/moduls': path.resolve(__dirname, 'redux/moduls'),
  'reactism/types': path.resolve(__dirname, 'redux/types'),
  'reactism/config': path.resolve(__dirname, 'config/')
}

module.exports = {
  // Disallow pages as route
  useFileSystemPublicRoutes: false,

  // Define routes
  exportPathMap: getRoutes,

  // Alias
  alias: aliases,

  // Webpack
  webpack: (config, { dev }) => {
    // Resolve path
    config.resolve = {
      extensions: ['.js', '.jsx', '.scss', '.css', '.mdx'],
      alias: aliases,
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
