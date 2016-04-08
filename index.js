var fs = require('fs')
var leven = require('leven')
var wordListPath = require('word-list')

var readDictionary = function(path) {
  path || (path = wordListPath)
  return fs.readFileSync(path).toString().trim().split('\n')
}

var autocorrect = function(options) {
  options || (options = {})
  var dictionary = options.words || readDictionary(options.dictionary)
  var len = dictionary.length

  return function(str) {
    var distance, bestWord, i, word, min

    for (i = 0; i < len; i++) {
      word = dictionary[i]
      distance = leven(str, word)

      if (distance === 0) {
        return word
      } else if (min === undefined || distance < min) {
        min = distance
        bestWord = word
      }
    }

    return bestWord
  }
}

module.exports = autocorrect
