import type { ConfigEnv } from '@quiteer/vite'
import { resolve } from 'node:path'
import { defineConfig } from '@quiteer/vite'
import configFn from '../../qvite.config'

export default defineConfig((envConfig) => {
  const { env: envOptions, plugins } = configFn(envConfig)

  const { root } = envConfig as ConfigEnv<ImportMetaEnv>
  console.log('envConfig: ', envConfig)

  const envConfigPath = resolve(root, '..', '..')

  return {
    vite: {
      server: {
        port: 8002,
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
      root: envConfigPath,
    },
    plugins: {
      ...plugins,
      VueDevTools: false,
    },
  }
})
