import { alias } from './next.config'

export default {
  title: 'Reactis',
  description: 'Reactis is a React Boilerplate based next.js',
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
