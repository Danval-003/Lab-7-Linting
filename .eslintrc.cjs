module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    semi: ['error', 'never'],
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
  },
}
