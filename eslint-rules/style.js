'use strict';

/**
 * These rules are all style choices, and can be changed as desired to suit any developer's style. Since they're style
 * rules, almost all of them will only issue warnings.
 */

module.exports = {
  rules: {

    // Require newlines between array brackets and their contents if the contents are split over multiple lines
    'array-bracket-newline': ['warn', { multiline: true } ],

    // Don't put spaces between array brackets and their contents if they're on the same line,
    // unless the content is itself objects or arrays
    'array-bracket-spacing': ['warn', 'never', { objectsInArrays: true, arraysInArrays: true } ],

    // Require spaces between block curly braces and their contents if they're on the same line
    'block-spacing': ['warn', 'always'],

    // Require opening braces on the same line, but put else/catch/finally on a new line
    // This is ideal for Jetbrains IDEs, minimizing space while also allowing proper folding
    'brace-style': ['warn', 'stroustrup'],

    // Require all properties, variables, and functions to use camelCase instead of snake_case.
    camelcase: 'warn',

    // Require comments to begin with a capital letter, except on consecutive lines or inside of a code line
    'capitalized-comments': ['warn', 'always', { ignoreInlineComments: true, ignoreConsecutiveComments: true } ],

    // Require a comma after the last element of an array, object, etc. if it's multiline
    'comma-dangle': ['warn', 'always-multiline'],

    // Always require a space after a comma, but never before
    'comma-spacing': 'warn',

    // Require commas in multiline arrays, objects, etc. to come on the end of lines
    'comma-style': ['warn', 'last'],

    // No spaces between square brackets and their contents for accessing properties
    'computed-property-spacing': 'warn',

    // If "this" is captured in a variable, it must be named "self"
    'consistent-this': ['warn', 'self'],

    // Require a trailing newline at the end of a file
    'eol-last': 'warn',

    // No spaces between function call parens and the arguments
    'func-call-spacing': 'warn',

    // In function expressions, the function must be named the same as the variable to which it is assigned
    'func-name-matching': 'warn',

    // Require named expressions to be named
    'func-names': ['warn', 'always'],

    // Prefer function expressions over function declarations
    'func-style': ['warn', 'expression'],

    // Arguments can be split over lines however the user wants, to allow ideal spacing
    'function-call-argument-newline': 'off',

    // Arguments can be on a separate line from their parens if they're on multiple lines or there is only one
    'function-paren-newline': ['warn', 'multiline-arguments'],

    // Require implicit returns from arrow functions to be on the same line as the function declaration
    'implicit-arrow-linebreak': ['warn', 'beside'],

    // Indentation is done with 2 spaces, which is ideal for heavily-nested code like JS usually is
    // eslint-disable-next-line no-magic-numbers
    indent: ['warn', 2],

    // Require the colon of objects to be against the key, and either 1 space after the colon or enough to align
    // the values of a multiline object
    'key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict', align: 'value' } ],

    // Require a space before and after keywords like if, else, class, instanceof, etc.
    'keyword-spacing': 'warn',

    // Only allow line comments to be on their own line
    'line-comment-position': 'warn',

    // Only allow "\n" as a linebreak
    'linebreak-style': ['warn', 'unix'],

    // Define rules for how comments should be padded with blank lines
    'lines-around-comment': [
      'warn', {

        // Empty line before block comments
        beforeBlockComment: true,

        // Code can come right after block comments
        afterBlockComment: false,

        // Empty line before a line comment
        beforeLineComment: true,

        // Code can come right after a line comment
        afterLineComment: false,
      },
    ],

    // Require blank lines between members of a class
    'lines-between-class-members': 'warn',

    // Lines can be no longer than 120 characters
    // eslint-disable-next-line no-magic-numbers
    'max-len': ['warn', 120],

    // Allow either multiple consecutive line comments or block comments
    'multiline-comment-style': 'off',

    // Require the operands of ternary operators to be on separate lines if any operand uses multiple lines
    'multiline-ternary': ['warn', 'always-multiline'],

    // Require constructors to be upper-case, and upper-case functions to be constructors
    'new-cap': 'warn',

    // Constructor calls always require parens, even if they don't take an argument
    'new-parens': 'warn',

    // Require chained function calls to be on new lines
    'newline-per-chained-call': 'warn',

    // Disallow using the array constructor to create arrays
    'no-array-constructor': 'warn',

    // Disallow bitwise operators, because they're so rarely used and probably a typo
    'no-bitwise': 'warn',

    // Personally I find continues very useful, so they stay allowed
    'no-continue': 'off',

    // Disallow comments on the same line as code
    'no-inline-comments': 'warn',

    // Prefer if-else over if inside of else
    'no-lonely-if': 'warn',

    // Disallow using different operators of similar types in a single expression, unless parens are used to group
    'no-mixed-operators': 'warn',

    // Disallow both spaces and tabs being used together for indentation and alignment
    'no-mixed-spaces-and-tabs': 'warn',

    // Disallow assigning to multiple variables in a single statement; it doesn't work how you think
    'no-multi-assign': 'warn',

    // Disallow too many consecutive empty lines, empty lines at the beginning of files, and more than 1 empty line
    // at the end of a file
    'no-multiple-empty-lines': ['warn', { max: 3, maxBOF: 0, maxEOF: 1 } ],

    // Disallow negated conditions in an if-else or other situation where it's easy to reverse
    'no-negated-condition': 'warn',

    // Disallow ternary operations inside of ternary operations
    'no-nested-ternary': 'warn',

    // Disallow "new Object()", as just using an object literal is preferable
    'no-new-object': 'warn',

    // Disallow unary ++ and --, except in the last third of a for statement
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true } ],

    // Disallow tab characters in code
    'no-tabs': 'warn',

    // I like ternary operators
    'no-ternary': 'off',

    // Disallow trailing spaces at the end of lines
    'no-trailing-spaces': 'warn',

    // Disallow underscores at the beginning of a variable
    'no-underscore-dangle': 'warn',

    // Disallow ternary operations when they can be simplified, including for default values of variables
    'no-unneeded-ternary': ['warn', { defaultAssignment: false } ],

    // Disallow whitespace within dot-notation, other than line breaks
    'no-whitespace-before-property': 'warn',

    // Require matching use/lack of newlines separating object literal curly braces from contents
    'object-curly-newline': ['warn', { consistent: true } ],

    // Always require a space between an object literal curly brace and its contents if they're on the same line
    'object-curly-spacing': ['warn', 'always'],

    // Require object properties to all be on the same line or all on unique lines
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true } ],

    // Require variable declarations to each be separate statements
    'one-var': ['warn', 'never'],

    // Require assignment operators over multiple operators when possible
    'operator-assignment': ['warn', 'always'],

    // Line breaks must come after binary and trinary operators
    'operator-linebreak': ['warn', 'after', { overrides: {} } ],

    // Don't allow empty lines to pad the start and end of blocks
    'padded-blocks': ['warn', 'never'],

    // Require a line after a directive, which will usually be the global "use strict"
    'padding-line-between-statements': ['warn', { blankLine: 'always', next: '*', prev: 'directive' } ],

    // Use the exponentiation operator instead of Math.pow
    'prefer-exponentiation-operator': 'warn',

    // Use object spread instead of Object.assign
    'prefer-object-spread': 'warn',

    // Only allow object properties to be quoted when they're needed (or if they're numbers)
    'quote-props': ['warn', 'as-needed', { unnecessary: true, numbers: true } ],

    // Always use single quotes, unless the string is a template or contains a single quote
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],

    // Always require semicolons at the end of statements, even if ASI would add one
    semi: ['warn', 'always'],

    // Always require a space after a semicolon, and none before
    'semi-spacing': ['warn', { before: false, after: true } ],

    // Don't require keys of an object to be sorted
    'sort-keys': 'off',

    // Always require a space before the opening curly brace of a block if it's on the same line as something
    'space-before-blocks': ['warn', 'always'],

    // No space before the parens in a function declaration, unless it's an async arrow function
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' } ],

    // No spaces between parenthesis and their contents
    'space-in-parens': ['warn', 'never'],

    // Require spaces around infix operators like + or ||
    'space-infix-ops': 'warn',

    // Require spaces between "word" unary operators and their operands (like new, delete, typeof, etc.)
    // Disallow spaces between "nonword" unary operators and their operands (like ++, --, !)
    'space-unary-ops': ['warn', { words: true, nonwords: false } ],

    // Require a space after the start of a comment
    'spaced-comment': ['warn', 'always'],

    // Require a space after, but not before, the colon of a case or default statement
    'switch-colon-spacing': 'warn',

    // No space between a tag function and its template literal
    'template-tag-spacing': ['warn', 'never'],

    // Require a BOM at the start of every file
    'unicode-bom': ['warn', 'never'],

    // Require regex literals to be wrapped in parens to avoid confusion with the division operator
    'wrap-regex': 'warn',
  },
};
