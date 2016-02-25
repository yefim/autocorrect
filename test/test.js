var assert = require('assert')
var spellcheck = require('../spellcheck')()
var framecheck = require('../spellcheck')({dictionary: __dirname + '/dict.txt'})
var editDistance = require('../editDistance')

describe('editDistance', function() {
  it('should return 0', function() {
    assert.equal(editDistance('', ''), 0)
    assert.equal(editDistance('a', 'a'), 0)
    assert.equal(editDistance('ab', 'ab'), 0)
  })

  it('should return 1', function() {
    assert.equal(editDistance('', 'a'), 1)
    assert.equal(editDistance('a', ''), 1)
    assert.equal(editDistance('a', 'b'), 1)
  })
})

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

describe('framecheck', function() {
  describe('matching words', function() {
    it('should return fro', function() {
      assert.equal(framecheck('fro'), 'fro')
    })

    it('should return from', function() {
      assert.equal(framecheck('from'), 'from')
    })

    it('should return frame', function() {
      assert.equal(framecheck('frame'), 'frame')
    })
  })

  describe('one letter swapped', function() {
    it('should return fro', function() {
      assert.equal(framecheck('fra'), 'fro')
    })
  })
})
