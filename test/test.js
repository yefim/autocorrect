var assert = require('assert')
var spellcheck = require('../spellcheck')

describe('spellcheck', function() {
  this.timeout(6000)

  describe('matching words', function() {
    it('should return arm', function() {
      assert.equal(spellcheck('arm'), 'arm')
    })

    it('should return bob', function() {
      assert.equal(spellcheck('bob'), 'bob')
    })

    it('should return zebra', function() {
      assert.equal(spellcheck('zebra'), 'zebra')
    })
  })

  describe('one letter swapped', function() {
    it('should return adz', function() {
      assert.equal(spellcheck('arz'), 'adz')
    })

    it('should return at', function() {
      assert.equal(spellcheck('zt'), 'at')
    })
  })

  describe('two letters swapped', function() {
    it('should return aardvark', function() {
      assert.equal(spellcheck('bordvark'), 'aardvark')
    })
  })

  describe('one letter to add', function() {
    it('should return embryo', function() {
      assert.equal(spellcheck('mbryo'), 'embryo')
    })
  })

  describe('two letters to add', function() {
    it('should return embryonic', function() {
      assert.equal(spellcheck('mbrynic'), 'embryonic')
    })
  })

  describe('three letters to add', function() {
    it('should return zymophosphate', function() {
      assert.equal(spellcheck('zmoposphat'), 'zymophosphate')
    })
  })
})
