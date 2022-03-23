module.exports = {
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
