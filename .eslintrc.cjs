module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  globals: {
    window: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:svelte/recommended',
  ],
  rules: {},
  overrides: [
    // see: https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
