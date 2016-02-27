var assert = require('assert')
var autocorrect = require('../index')()
var framecomplete = require('../index')({dictionary: __dirname + '/dict.txt'})
var wordcomplete = require('../index')({words: ['word', 'words', 'weird']})

describe('autocorrect', function() {
  this.timeout(6000)

  describe('matching words', function() {
    it('should return arm', function() {
      assert.equal(autocorrect('arm'), 'arm')
    })

    it('should return bob', function() {
      assert.equal(autocorrect('bob'), 'bob')
    })

    it('should return zebra', function() {
      assert.equal(autocorrect('zebra'), 'zebra')
    })
  })

  describe('one letter swapped', function() {
    it('should return adz', function() {
      assert.equal(autocorrect('arz'), 'adz')
    })

    it('should return at', function() {
      assert.equal(autocorrect('zt'), 'at')
    })
  })

  describe('two letters swapped', function() {
    it('should return aardvark', function() {
      assert.equal(autocorrect('bordvark'), 'aardvark')
    })
  })

  describe('one letter to add', function() {
    it('should return embryo', function() {
      assert.equal(autocorrect('mbryo'), 'embryo')
    })
  })

  describe('two letters to add', function() {
    it('should return embryonic', function() {
      assert.equal(autocorrect('mbrynic'), 'embryonic')
    })
  })

  describe('three letters to add', function() {
    it('should return zymophosphate', function() {
      assert.equal(autocorrect('zmoposphat'), 'zymophosphate')
    })
  })
})

describe('framecomplete', function() {
  describe('matching words', function() {
    it('should return fro', function() {
      assert.equal(framecomplete('fro'), 'fro')
    })

    it('should return from', function() {
      assert.equal(framecomplete('from'), 'from')
    })

    it('should return frame', function() {
      assert.equal(framecomplete('frame'), 'frame')
    })
  })

  describe('one letter swapped', function() {
    it('should return fro', function() {
      assert.equal(framecomplete('fra'), 'fro')
    })
  })
})

describe('wordcomplete', function() {
  describe('matching words', function() {
    it('should return word', function() {
      assert.equal(wordcomplete('word'), 'word')
    })

    it('should return words', function() {
      assert.equal(wordcomplete('words'), 'words')
    })

    it('should return weird', function() {
      assert.equal(wordcomplete('weird'), 'weird')
    })
  })

  describe('one letter swapped', function() {
    it('should return word', function() {
      assert.equal(wordcomplete('ward'), 'word')
    })

    it('should return weird', function() {
      assert.equal(wordcomplete('waird'), 'weird')
    })
  })
})
