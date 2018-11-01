import { alias } from './next.config'
const path = require('path')

export default {
  title: 'Reactis',
  description: 'Reactis is a React Boilerplate based next.js',
  themeConfig: {
    codemirrorTheme: 'dracula'
  },
  modifyBundlerConfig: config => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: alias
      }
    };

    return newConfig;
  },
}
