var assert = require('assert');
var spellcheck = require('../spellcheck');

describe('spellcheck', function() {
  this.timeout(5000);

  describe('matching words', function() {
    it('should return arm', function() {
      assert.equal(spellcheck('arm'), 'arm');
    });

    it('should return bob', function() {
      assert.equal(spellcheck('bob'), 'bob');
    });
  });

  describe('one letter swapped', function() {
    it('should return adz', function() {
      assert.equal(spellcheck('arz'), 'adz');
    });

    it('should return at', function() {
      assert.equal(spellcheck('zt'), 'at');
    });
  });

  describe('one letter to add', function() {
    it('should return embryo', function() {
      assert.equal(spellcheck('mbryo'), 'embryo');
    });
  });
});
