import type { ConfigEnv } from '@quiteer/vite'
import { resolve } from 'node:path'
import { defineConfig } from '@quiteer/vite'
import presetIcons from '@unocss/preset-icons'

export default defineConfig((envConfig) => {
  const { env, root } = envConfig as ConfigEnv<ImportMetaEnv>
  console.log('envConfig: ', envConfig)
  console.log('env: ', env)

  const mainTs = (dir: string) => `/apps/${dir}/src/main.ts`
  const styleCss = (dir: string) => `/apps/${dir}/src/style.css`

  return {
    vite: {
      resolve: { alias: { '@': resolve(root, 'src') } },
      server: {
        port: 8000,
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
      Vue: [{
        template: {
          compilerOptions: {
          // 将 micro-app 视为原生自定义元素，不尝试解析为 Vue 组件
            isCustomElement: tag => tag.startsWith('micro-app'),
          },
        },
      }],
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
