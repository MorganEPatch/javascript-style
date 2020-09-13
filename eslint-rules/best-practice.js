'use strict';

/**
 * These rules are aimed at encouraging good code and preventing common code smells. Think carefully before changing or
 * disabling most of these rules.
 */

module.exports = {
  rules: {

    // Disallow a setter without a getter
    'accessor-pairs': 'error',

    // Require return in most array function callbacks, and disallow it in forEach
    'array-callback-return': ['error', { checkForEach: true } ],

    // Disallow use of variables declared with "var" outside of the block they're declared in
    'block-scoped-var': 'error',

    // Disallow non-static classes that don't
    'class-methods-use-this': 'error',

    // Methods must either always or never return a value
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true } ],

    // Blocks must always be surrounded by curly braces, even one-line loops or branches
    curly: ['error', 'all'],

    // All switches must have a default case (no comment allowed; the regex matches nothing)
    'default-case': ['error', { commentPattern: '^(?!x)x' } ],

    // Default cases must come at the end of switches
    'default-case-last': 'error',

    // Function parameters with default values must come at the end of the list
    'default-param-last': 'error',

    // If a dot notation is split by a newline, it must come after the dot
    'dot-location': ['error', 'property'],

    // Require dot over bracket notation when possible
    'dot-notation': 'error',

    // Require triple equals instead of double equals
    eqeqeq: 'error',

    // Require that getters and setters be next to each other
    'grouped-accessor-pairs': 'warn',

    // Allow for-in loops without filtering prototype attributes (we use a lot of raw JS/JSON objects in REST)
    'guard-for-in': 'off',

    // Disallow alert, confirm, and prompt
    'no-alert': 'error',

    // Disallow arguments.caller and arguments.callee
    'no-caller': 'error',

    // Disallow variables in case/default statements without blocks
    'no-case-declarations': 'error',

    // Disallow return statements inside of constructors
    'no-constructor-return': 'error',

    // Escape division operators in regexes
    'no-div-regex': 'error',

    // Disallow else statements after a return in the if
    'no-else-return': 'error',

    // Issue a warning for functions with no body
    'no-empty-function': 'warn',

    // Disallow destructuring that has no effect
    'no-empty-pattern': 'error',

    // Disallow comparison to null without type checking
    'no-eq-null': 'error',

    // Disallow the use of eval
    'no-eval': 'error',

    // Disallow extending native JS objects
    'no-extend-native': 'error',

    // Disallow using bind on functions that don't use this
    'no-extra-bind': 'error',

    // Disallow using labels for loops where they're not necessary
    'no-extra-label': 'error',

    // Disallow switch statement fallthrough
    'no-fallthrough': 'error',

    // Require digits on both sides of a decimal place
    'no-floating-decimal': 'error',

    // Disallow overwriting global variables like window
    'no-global-assign': 'error',

    // Disallow type coercion through common tricks like double negation or empty string concatenation
    'no-implicit-coercion': 'error',

    // Disallow accidentally adding variables to the global scope
    'no-implicit-globals': 'error',

    // Disallow functions that evaluate strings of code like setTimeout()
    'no-implied-eval': 'error',

    // Disallow "this" outside of classes and bound functions
    'no-invalid-this': 'error',

    // Disallow using __iterator__, which is deprecated
    'no-iterator': 'error',

    // Disallow code labels other than for nested loops
    'no-labels': ['error', { allowLoop: true } ],

    // Disallow declaring functions inside of loops
    'no-loop-func': 'error',

    // Disallow magic numbers other than 0, 1, or common HTTP statuses, other than in array indexes
    'no-magic-numbers': [
      'error', {
        ignore:             [0, 1, 200, 201, 204, 400, 401, 403, 404, 500, 501, '0n', '1n'],
        ignoreArrayIndexes: true,
        enforceConst:       true,
      },
    ],

    // Disallow multiple space characters other than for indentation
    'no-multi-spaces': 'warn',

    // Disallow multiline strings using backslashes
    'no-multi-str': 'error',

    // Disallow calling constructors without assigning the results
    'no-new': 'error',

    // Disallow creating functions with the Function constructor
    'no-new-func': 'error',

    // Disallow calling the String, Number, or Boolean constructors (call them as functions instead, "a = String(b)")
    'no-new-wrappers': 'error',

    // Disallow octal literals, since they're usually confusing
    'no-octal': 'error',

    // Disallow octal escapes in strings; use unicode escapes
    'no-octal-escape': 'error',

    // Disallow reassigning the values of function parameters
    'no-param-reassign': 'error',

    // Don't use the __proto__ property, it's deprecated
    'no-proto': 'error',

    // Disallow redefining variables using "var"
    'no-redeclare': 'error',

    // Disallow assignment inside of return statements, unless parens are used to clarify
    'no-return-assign': 'error',

    // Using "return await" incurs performance cost, but is easier to debug; allow the user to choose what they want
    'no-return-await': 'off',

    // Disallow URLs with a "javascript:" protocol
    'no-script-url': 'error',

    // Disallow assigning a variable to itself uselessly
    'no-self-assign': 'error',

    // Disallow comparing a variable to itself uselessly
    'no-self-compare': 'error',

    // Disallow the comma operator
    'no-sequences': 'error',

    // Only throw error objects
    'no-throw-literal': 'error',

    // Disallow loops where the variable in the condition is unmodified
    'no-unmodified-loop-condition': 'error',

    // Disallow expressions that don't affect anything
    'no-unused-expressions': 'warn',

    // Disallow labels that aren't used anywhere
    'no-unused-labels': 'warn',

    // Disallow .call() and .apply() where unnecessary
    'no-useless-call': 'error',

    // Disallow catch statements that just rethrow the error
    'no-useless-catch': 'error',

    // Disallow concatenating string literals
    'no-useless-concat': 'error',

    // Disallow escape sequences that don't escape anything
    'no-useless-escape': 'error',

    // Disallow return statements that don't do anything
    'no-useless-return': 'error',

    // Disallow the "void" operator, which is obsolete now
    'no-void': 'error',

    // Warn if there are any TODO or FIXME comments so we can take care of them
    'no-warning-comments': 'warn',

    // Disallow the with statement
    'no-with': 'error',

    // Require named capture groups instead of numbered ones
    'prefer-named-capture-group': 'error',

    // Require the argument to reject a promise to be an error
    'prefer-promise-reject-errors': 'error',

    // Use regex literals instead of the RegExp constructor
    'prefer-regex-literals': 'error',

    // Require providing the radix to parseInt
    radix: 'error',

    // Disallow async functions that never await anything
    'require-await': 'error',

    // Require the "u" flag on regexes
    'require-unicode-regexp': 'error',

    // Require "var" declarations to be at the top of their scope
    'vars-on-top': 'error',

    // Require function expressions to be wrapped in parens if they're immediately invoked
    'wrap-iife': ['error', 'inside'],

    // Disallow yoda conditions, since ESLint already prevents assignment in conditionals
    yoda: ['error', 'never'],
  },
};
