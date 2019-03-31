module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    node: {
      tryExtentions: ['.js', '.json', '.ts'],
    },
  },
  rules: {
    // 'node/no-missing-import': 'error',
    '@typescript-eslint/indent': ['error', 2]
  },
}
