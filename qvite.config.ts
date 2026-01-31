import type { ConfigEnv } from '@quiteer/vite'
import { defineConfig } from '@quiteer/vite'

export default defineConfig((envConfig) => {
  const { env } = envConfig as ConfigEnv<ImportMetaEnv>
  console.log('envConfig: ', envConfig)
  console.log('env: ', env)
  const mainTs = (dir: string) => `/apps/${dir}/src/main.ts`
  const styleCss = (dir: string) => `/apps/${dir}/src/style.css`

  return {
    vite: {
      server: {
        port: 8000,
      },
    },
    html: {
      config: {
        title: '主应用',
        tags: [
          { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico' }, selfClosing: true, position: 'head' },
        ],
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
    UnoCSS: true,
    plugins: {
      Vue: [{
        template: {
          compilerOptions: {
          // 将 micro-app 视为原生自定义元素，不尝试解析为 Vue 组件
            isCustomElement: tag => tag.startsWith('micro-app'),
          },
        },
      }],
    },
  }
})
