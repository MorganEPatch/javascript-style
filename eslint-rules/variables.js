'use strict';

/**
 * These rules relate to variable declarations, and are mostly best practices. Consider carefully before overwriting or
 * disabling these rules.
 */

module.exports = {
  rules: {

    // Require variables to be initialized when they're declared
    'init-declarations': ['error', 'always'],

    // Disallow variables to be deleted (delete is for object properties)
    'no-delete-var': 'error',

    // Disallow labels with the same name as a variable
    'no-label-var': 'error',

    // Disallow variables to be shadowed by declarations on a more inner scope
    'no-shadow': 'error',

    // Disallow variable declarations to shadow restricted names
    'no-shadow-restricted-names': 'error',

    // Disallow references to undeclared variables
    'no-undef': 'error',

    // Disallow initializing variables to undefined
    'no-undef-init': 'error',

    // Disallow shadowing or overwriting undefined
    'no-undefined': 'error',

    // Warn when a variable is declared but never used
    'no-unused-vars': 'warn',

    // Disallow referencing a variable before it is declared with "var"
    'no-use-before-define': 'error',
  },
};
