const withCss = require('@zeit/next-css')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const aliases = {
  'Components': path.resolve(__dirname, 'components/'),
  'Containers': path.resolve(__dirname, 'components/containers'),
  'Elements': path.resolve(__dirname, 'components/elements/'),
  'Utils': path.resolve(__dirname, 'components/utilities/'),
  'Layout': path.resolve(__dirname, 'components/pageLayouts/'),
  'Hocs': path.resolve(__dirname, 'hocs/'),
  'Actions': path.resolve(__dirname, 'redux/actions'),
  'Reducer': path.resolve(__dirname, 'redux/reducers'),
  'Types': path.resolve(__dirname, 'redux/types'),
  'Config': path.resolve(__dirname, 'config/')
}

module.exports = withCss({
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  // Disallow pages as route
  useFileSystemPublicRoutes: false,

  // Alias
  alias: aliases,

  // Webpack
  webpack: (config) => {
    // Resolve path
    config.resolve = {
      extensions: ['.js', '.jsx', '.scss', '.css', '.mdx'],
      alias: aliases,
    }

    config.node = {
      fs: 'empty'
    }

    config.plugins.push(
      // GZIP Compression
      new CompressionPlugin({
        filename: '[path].gz[query]',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        cache: true
      }),
      // Service Worker
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

    config.module.rules.push(
      {
        test: /.*\.(otf|eot|woff|woff2|ttf|svg|png|jpe?g|gif|md)$/i,
        use: [
          {
            loader: 'url-loader'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    )

    config.module.rules.push(
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      }
    )

    return config
  }
})
