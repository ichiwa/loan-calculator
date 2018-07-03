// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/recommended',
		'prettier'
  ],
  // required to lint *.vue files
  plugins: ['prettier', 'vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'spaced-comment': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'no-mixed-operators': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'object-shorthand': 0,
    'func-names': 0,
    'vue/max-attributes-per-line': 0,
  },
};
