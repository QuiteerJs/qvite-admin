import type { ConfigEnv } from '@quiteer/vite'
import { defineConfig } from '@quiteer/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig((envConfig) => {
  const { env } = envConfig as ConfigEnv<ImportMetaEnv>
  console.log('envConfig: ', envConfig)
  console.log('env: ', env)

  const mainTs = (dir: string) => `/apps/${dir}/src/main.ts`
  const styleCss = (dir: string) => `/apps/${dir}/src/style.css`

  return {
    vite: {
      server: {
        port: 8090,
      },
    },
    html: {
      config: {
        title: '主应用',
      },
      pages: {
        '/child-1/index.html': {
          title: '子应用1',
          entry: mainTs('child-1'),
          style: { src: styleCss('child-1'), position: 'head' },
        },
        '/child-2/index.html': {
          title: '子应用2',
          entry: mainTs('child-2'),
          style: { src: styleCss('child-2'), position: 'head' },
        },
      },
    },
    env: {
      requiredKeys: ['desc', 'baseURL'],
    },
    plugins: {
      UnoCSS: [{
        presets: [
          presetIcons({
            scale: 1,
            extraProperties: {
              display: 'inline-block',
            },
            warn: true,
          }),
        ],
      }],
    },
  }
})
