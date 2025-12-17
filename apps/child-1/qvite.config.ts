import { defineConfig } from '@quiteer/vite'
import configFn from '../../qvite.config'

export default defineConfig((envConfig) => {
  const { env: envOptions, plugins } = configFn(envConfig)

  return {
    vite: {
      server: {
        port: 8001,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
    html: {
      config: {
        title: 'Child 1',
      },
    },
    env: {
      ...envOptions,
    },
    plugins: {
      ...plugins,
      VueDevTools: false,
    },
  }
})
