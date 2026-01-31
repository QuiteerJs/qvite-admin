import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  yaml: false,
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'time', 'timeEnd'] }],
  },
})
