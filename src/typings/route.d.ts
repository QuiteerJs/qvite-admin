import 'vue-router'

declare module 'vue-router' {
  type Meta = import('@quiteer/naive-extra').RouteMeta

  interface RouteMeta extends Meta {

  }
}

declare module '*.vue' {
  const Component: import('vue').DefineComponent<object, object, any>
  export default Component
}
