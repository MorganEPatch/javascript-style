'use strict';

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
  const config = require('../.jshintrc');

  it('should be a plain object', () => {
    expect(isSimpleObj(config)).to.equal(true);
  });

  it('should return correct validation errors', () => {
    jshint('console.log("foo")\n', 'config');
    const errors = jshint.errors;
    const expected = ['W109', 'W033', 'W117'];

    expect(errors.length).to.equal(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(errors[i]).to.equal(expected[i]);
    }
  });
});
