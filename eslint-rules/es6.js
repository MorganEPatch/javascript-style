'use strict';

/**
 * Directives related directly to changes introduced in ECMAScript 6 (aka ECMAScript 2015).
 */

module.exports = {
  rules: {

    // Arrow function parameters must always have parens, even if there's only one
    'arrow-parens': ['warn', 'always'],

    // The arrow in an arrow function should have spaces on either side
    'arrow-spacing': ['warn', { before: true, after: true } ],

    // Ensure constructors of derived classes call super, and constructors of non-derived class don't
    'constructor-super': 'error',

    // Attach the star on a generator function to the word "function"
    'generator-star-spacing': ['warn', 'after'],

    // Classes are just variables, so disallow reassigning them
    'no-class-assign': 'error',

    // The arrow operator looks like a comparison operator, so require disambiguating parens
    'no-confusing-arrow': ['error', { allowParens: true } ],

    // Reassigning const variables isn't allowed, so throw a linting error
    'no-const-assign': 'error',

    // Disallow duplicate members of a class, which would otherwise shadow each other
    'no-dupe-class-members': 'error',

    // Group all imports from one source together for readability
    'no-duplicate-imports': 'error',

    // Disallow calling "new Symbol", since it should just be "Symbol"
    'no-new-symbol': 'error',

    // Disallow using this or super before calling super() in a constructor of a derived class
    'no-this-before-super': 'error',

    // Disallow computed keys that just have literals
    'no-useless-computed-key': ['error', { enforceForClassMembers: true } ],

    // Disallow empty constructors, which are automatically provided by ECMAScript 6+
    'no-useless-constructor': 'error',

    // Disallow renaming imports, exports, and destructuring assignments to the same name as they already have
    'no-useless-rename': 'error',

    // Disallow "var", preferring "let" or "const"
    'no-var': 'error',

    // Always prefer shorthand property syntax, except when the key is a string literal
    'object-shorthand': [
      'error', 'always', {
        avoidQuotes:               true,
        ignoreConstructors:        true,
        avoidExplicitReturnArrows: true,
      },
    ],

    // When passing a function as a function parameter, require an arrow function instead of a function expression
    'prefer-arrow-callback': 'error',

    // Use const instead of let whenever a variable isn't reassigned
    'prefer-const': 'error',

    // Allow dot-notation and bracket-notation access to object properties and array members instead of destructuring
    'prefer-destructuring': 'off',

    // Use numeric literals, introduced in ES6, instead of calling parseInt on literals
    'prefer-numeric-literals': 'error',

    // Use rest params for variadic functions instead of arguments
    'prefer-rest-params': 'error',

    // Use spread syntax for variadic functions instead of apply
    'prefer-spread': 'error',

    // Use templates instead of string concatenation
    'prefer-template': 'error',

    // There's no need for a function to be a generator if it doesn't yield, so issue a warning
    'require-yield': 'warn',

    // No space between the spread operator and the param it applies to
    'rest-spread-spacing': ['warn', 'never'],

    // Sort imports alphabetically, ignoring case, and allowing newlines to separate groups of imports
    'sort-imports': ['warn', { ignoreCase: true, allowSeparatedGroups: true } ],

    // Require symbols to have descriptions, for ease of debugging
    'symbol-description': 'error',

    // No spaces within curly braces for a template
    'template-curly-spacing': ['warn', 'never'],

    // Attach the star to the yield keyword
    'yield-star-spacing': ['warn', 'after'],
  },
};
