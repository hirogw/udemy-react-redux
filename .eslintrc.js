module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'indent': ['error', 2],
    'react/jsx-indent': [2, 2],
    'no-underscore-dangle': [
      "error",
      { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
    ],
  },
};
