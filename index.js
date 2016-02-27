var fs = require('fs')
var leven = require('leven')

var readDictionary = function(path) {
  path || (path = '/usr/share/dict/words')
  return fs.readFileSync(path).toString().trim().split('\n')
}

var autocorrect = function(options) {
  options || (options = {})
  var dictionary = options.words || readDictionary(options.dictionary)

  return function(str) {
    var distance, bestWord, i
    var min = Infinity
    var len = dictionary.length

    for (i = 0; i < len; i++) {
      distance = leven(str, dictionary[i])
      if (distance === 0) {
        return dictionary[i]
      } else if (distance < min) {
        min = distance
        bestWord = dictionary[i]
      }
    }

    return bestWord
  }
}

module.exports = autocorrect
