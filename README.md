autocorrect
==============

Finds the best matching word using the first smallest Levenshtein distance.

## Usage

### Default options

````javascript
var autocorrect = require('autocorrect')()
autocorrect('mbryo') // embryo
````

### Custom dictionary path

````javascript
var wordListPath = require('word-list')
var autocorrect = require('autocorrect')({dictionary: wordListPath})
autocorrect('mbryo') // embryo
````

### Custom words
```` javascript
var words = ['word', 'weird', 'wired']
var autocorrect = require('autocorrect')({words: words})
autocorrect('wared') // wired
````

## Options

* `words` - a list of words to use for matching
* `dictionary` - path to dictionary file (defaults to `/usr/share/dict/words`)
