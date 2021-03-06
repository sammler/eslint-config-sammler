module.exports = {
  extends: "xo-space",
  env: {
    node: true,
    es6: false,
    browser: false
  },
  rules: {
    quotes: [2, "single"],
    "no-console": 0,
    "one-var": [2, "never"],
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "no-trailing-spaces": 0,
    "no-param-reassign": 0,
    camelcase: 0,
    "padded-blocks": 0,
    "no-warning-comments": 0
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6
  }
};
