'use strict';

/**
 * These rules are designed to catch common errors that cause code to behave different than they might seem if you don't
 * know some of the strange corner cases in Javascript. These probably shouldn't be changed.
 */

module.exports = {
  rules: {

    // Prevent infinite for-loops from iterating in the wrong direction
    'for-direction': 'error',

    // Require return statements in getters
    'getter-return': 'error',

    // Disallow async functions passed as the executor to a promise constructor
    'no-async-promise-executor': 'error',

    // Disallow awaiting inside a loop (use Promise.all to parallelize)
    'no-await-in-loop': 'error',

    // Disallow comparison to negative zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditionals (unless it's in separate parens, like `if ((x = foo()) !== null)`
    'no-cond-assign': ['error', 'except-parens'],

    // Since we're developing in node, we should allow console calls
    'no-console': 'off',

    // Constant conditions are usually used for debugging, remove them before committing
    'no-constant-condition': 'warn',

    // Disallow control characters in regexes
    'no-control-regex': 'error',

    // The debugger statement is outdated and should be avoided
    'no-debugger': 'error',

    // Arguments with the same name shadow each other, prevent this
    'no-dupe-args': 'error',

    // Disallow duplicate conditions in an if-else-if chain
    'no-dupe-else-if': 'error',

    // Disallow an object to contain the same key twice (otherwise they shadow each other)
    'no-dupe-keys': 'error',

    // Disallow a switch statement to have the same case twice
    'no-duplicate-case': 'error',

    // Warn if a code block is empty, unless it's a catch
    'no-empty': ['warn', { allowEmptyCatch: true } ],

    // Disallow empty character classes in a regex
    'no-empty-character-class': 'error',

    // Disallow reassignment of errors caught in a catch block
    'no-ex-assign': 'error',

    // Disallow unnecessary casting to boolean (such as in an if statement)
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses, except to group binary expressions for readability
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false } ],

    // Disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // Disallow reassigning variables that hold FunctionDefinitions
    'no-func-assign': 'error',

    // Disallow reassigning variables that were imported
    'no-import-assign': 'error',

    // Disallow FunctionDefinitions and "var" inside blocks
    'no-inner-declarations': 'error',

    // Disallow invalid regexes as string arguments to the RegExp constructor
    'no-invalid-regexp': 'error',

    // Disallow whitespace that isn't spaces, tabs, or newlines
    'no-irregular-whitespace': 'error',

    // Disallow number literals that lose precision when rounded into IEEE 754
    'no-loss-of-precision': 'error',

    // Disallow multibyte characters in regex character classes, since they don't work
    'no-misleading-character-class': 'error',

    // Disallow calling an object as a method or constructor (if it doesn't have one)
    'no-obj-calls': 'error',

    // Disallow returning from a promise's executor function (use resolve or reject)
    'no-promise-executor-return': 'error',

    // Allow directly calling object prototype functions
    'no-prototype-builtins': 'off',

    // Disallow multiple spaces in a row in a regex (use a quantity instead, like /a {3}b/
    'no-regex-spaces': 'error',

    // Disallow returns in a setter
    'no-setter-return': 'error',

    // Disallow sparse arrays (comments to enable on a line are fine if need)
    'no-sparse-arrays': 'error',

    // Disallow template variables, like ${var}, inside regular quotes
    'no-template-curly-in-string': 'error',

    // Disallow multiline expressions that look like separate expressions
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after returns, breaks, etc.
    'no-unreachable': 'error',

    // Disallow loops that can never have more than one iteration (like from a break outside of a conditional)
    'no-unreachable-loop': 'error',

    // Disallow return, throw, etc. inside of finally blocks
    'no-unsafe-finally': 'error',

    // Disallow negation of lefthand operands of in or instanceof
    'no-unsafe-negation': 'error',

    // Disallow regex backreference that can't reference anything
    'no-useless-backreference': 'error',

    // Disallow race conditions from bad assignments combined with await or yield
    'require-atomic-updates': 'error',

    // Disallow double or triple equals (or not equals) with NaN; use Number.isNaN() instead
    'use-isnan': 'error',

    // Disallow comparison of the result of typeof with literals it can't return
    'valid-typeof': 'error',
  },
};
