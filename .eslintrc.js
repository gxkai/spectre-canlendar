module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'vue/no-unused-components':
      process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'off' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
