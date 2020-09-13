'use strict';

module.exports = {
  extends: [
    './eslint-rules/possible-errors.js',
    './eslint-rules/best-practice.js',
    './eslint-rules/variables.js',
    './eslint-rules/style.js',
    './eslint-rules/es6.js',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType:  'script',
  },
  env: {
    node:  true,
    mocha: true,
  },
  globals: {
    describe:   'readonly',
    // eslint-disable-next-line id-length
    it:         'readonly',
    before:     'readonly',
    after:      'readonly',
    beforeEach: 'readonly',
    afterEach:  'readonly',
    expect:     'readonly',
  },
  rules: {
    strict: ['error', 'global'],
  },
};
