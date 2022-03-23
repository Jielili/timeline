module.exports = {
  '*.{js,jsx,vue}': 'vue-cli-service lint',
  'src/**/*.{js,vue,css,less}': [
    'eslint --fix',
    'stylelint --fix',
    'git add'
  ]
}
