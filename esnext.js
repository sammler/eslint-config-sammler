module.exports = {
  extends: "xo-space",
  env: {
    node: true,
    es6: true,
    browser: false
  },
  rules: {
    quotes: ["error", "single", {"allowTemplateLiterals": true}],
    "no-console": 0,
    "one-var": ["error", "never"],
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
    ecmaVersion: 8
  }
};
