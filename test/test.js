'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const jshint = require('jshint').JSHINT;

const isSimpleObj = function isSimpleObj(obj) {
  if (Object.getPrototypeOf(obj) === null) {
    return true;
  }

  let prototype = obj;
  while (Object.getPrototypeOf(prototype)) {
    prototype = Object.getPrototypeOf(prototype);
  }

  return Object.getPrototypeOf(prototype) === null;
};

describe('JSHint config', () => {
  const config = JSON.parse(fs.readFileSync('./.jshintrc', 'utf-8'));

  it('should be a plain object', () => {
    expect(isSimpleObj(config)).to.equal(true);
  });

  it('should return correct validation errors', () => {
    const code = "'use strict';" +
      'let a = 13 & 3;' +
      'if (2 == 3) a = 2;' +
      'if (a === null) { a = 3 }' +
      "const b = {'foo': 'bar'};" +
      'for (k in b) { console.log(c); }' +
      'Array.prototype.count = 4;' +
      'var c = 10;' +
      'switch (c) { case 1: default: console.log(c); }' +
      'const d = (2, 3);' +
      'new String(d);' +
      'const e = /^a$/' +
      'delete(b.foo);';

    jshint(code, config);
    const errors = jshint.errors;

    /*
     * W016: Unexpected use of '&' (bitwise).
     * W116: Expected '===' and instead saw '==' (eqeqeq).
     * W116: Expected '{' and instead saw 'a' (curly).
     * W033: Missing semicolon (semi).
     * W088: Creating global 'for' variable (varstmt).
     * W121: Extending prototype of native object: 'Array' (freeze).
     * W132: Use of 'var' instead of 'let' or 'const' (varstmt).
     * W003: 'c' was used before it was defined (latedef).
     * W145: Superfluous 'case' clause (leanswitch).
     * W127: Unexpected use of a comma operator (nocomma).
     * W053: Do not use String as a constructor (nonew).
     * W031: Do not use 'new' for side effects (nonew).
     * W147: Regular expressions should include the 'u' flag (regexpu).
     * E033: Expected an operator and instead saw 'delete' (singleGroups).
     * W067: Unorthodox function invocation (singleGroups).
     * W117: 'k' is not defined (undef).
     * W098: 'e' is defined but never used (unused).
     */
    const expected = [
      'W016', 'W116', 'W116', 'W033', 'W088', 'W121', 'W132', 'W003', 'W145', 'W127', 'W053', 'W031',
      'W147', 'E033', 'W067', 'W117', 'W098',
    ];

    expect(errors.length).to.equal(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(errors[i].code).to.equal(expected[i]);
    }
  });
});
