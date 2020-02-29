module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'airbnb',
  ],
  globals: {
    window: 'readonly',
    location: 'readonly',
    document: 'readonly',
    //テスト関係
    describe: true,
    expect: true,
    test: true,
    beforeEach: true,
  },
  rules: {
    'no-console': 'warn',
    // 'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    indent: [2, 2, { "SwitchCase": 1 }],

    'no-extra-bind': 'warn',
    'no-extra-bind': 'warn',
    'no-fallthrough': 'warn',
    'no-empty': 'warn',
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    'linebreak-style': 'warn',
    'no-trailing-spaces': 'warn',
    'unicode-bom': 'warn',
    'max-len': 'warn',
    'prefer-const': 'warn',
    // 'arrow-parens': 'error',

  },
  settings: {
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
  },
};
