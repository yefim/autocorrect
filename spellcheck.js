var fs = require('fs')
var editDistance = require('./editDistance')

var spellcheck = function(options) {
  options || (options = {})
  var path = options.dictionary || '/usr/share/dict/words'
  var dictionary = fs.readFileSync(path).toString().trim().split('\n')

  return function(str) {
    var distance
    var bestWord
    var min = Infinity

    for (var i = 0, l = dictionary.length; i < l; i++) {
      distance = editDistance(str, dictionary[i])
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

module.exports = spellcheck
