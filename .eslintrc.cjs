module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended', // aquí es donde se extiende la configuración de Prettier
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'prettier', // asegúrate de tener el plugin de Prettier en la lista de plugins
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    semi: ['error', 'never'],
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
