var assert = require('assert')
var autocorrect = require('../index')()
var framecomplete = require('../index')({dictionary: __dirname + '/dict.txt'})
var wordcomplete = require('../index')({words: ['word', 'words', 'weird']})

describe('autocorrect', function() {
  describe('matching words', function() {
    it('should return giraffe', function() {
      assert.equal(autocorrect('giraffe'), 'giraffe')
    })

    it('should return aa', function() {
      assert.equal(autocorrect('aa'), 'aa')
    })

    it('should return zzz', function() {
      assert.equal(autocorrect('zzz'), 'zzz')
    })
  })

  describe('one letter swapped', function() {
    it('should return zebra', function() {
      assert.equal(autocorrect('yebra'), 'zebra')
    })

    it('should return aa', function() {
      assert.equal(autocorrect('az'), 'aa')
    })
  })

  describe('two letters swapped', function() {
    it('should return zebra', function() {
      assert.equal(autocorrect('bbrdvark'), 'aardvark')
    })
  })

  describe('one letter to add', function() {
    it('should return aa', function() {
      assert.equal(autocorrect('a'), 'aa')
    })

    it('should return zebra', function() {
      assert.equal(autocorrect('zebr'), 'zebra')
    })
  })

  describe('one letter to remove', function() {
    it('should return zzz', function() {
      assert.equal(autocorrect('yzzz'), 'zzz')
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

  describe('two letters swapped', function() {
    it('should return fro', function() {
      assert.equal(framecomplete('ooo'), 'fro')
    })
  })

  describe('one letter to add', function() {
    it('should return fro', function() {
      assert.equal(framecomplete('fr'), 'fro')
    })
  })

  describe('two letters to add', function() {
    it('should return ear', function() {
      assert.equal(framecomplete('e'), 'ear')
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
