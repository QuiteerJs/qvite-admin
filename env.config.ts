import type { EnvConfig } from '@quiteer/vite'

type MyConfig = EnvConfig<'baseURL' | 'apiURL' | 'uploadURL' | 'title'>

export default {
  default: {
    desc: '通用环境变量',
    testUrl: 'https://quiteerjs.github.io/web/',
  },
  development: {
    desc: '开发环境变量',
    baseURL: 'http://localhost:3000',
    apiURL: '/api',
    uploadURL: '/files',
    title: 'xxx',
  },
  production: {
    desc: '生产环境变量',
    baseURL: 'https://api.example.com',
    apiURL: '/api',
    uploadURL: '/files',
    title: 'prod',
  },
  test: {
    desc: '测试环境变量',
    baseURL: 'https://api.test.example.com',
    apiURL: '/api',
    uploadURL: '/files',
    title: 'test',
  },
  staging: {
    desc: '预发布环境变量',
    baseURL: 'https://api.staging.example.com',
    apiURL: '/api',
    uploadURL: '/files',
    title: 'staging',
  },
  release: {
    desc: '发布环境变量',
    baseURL: 'https://api.release.example.com',
    apiURL: '/api',
    uploadURL: '/files',
    title: 'release',
  },
} satisfies MyConfig
