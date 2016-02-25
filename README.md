spellcheck
==============

Finds the best matching word using the first smallest Levenshtein distance.

## Usage

### Default options

````javascript
var spellcheck = require('spellcheck')()
spellcheck('mbryo') // embryo
````

### Custom dictionary

````javascript
var wordListPath = require('word-list')
var spellcheck = require('spellcheck')({dictionary: wordListPath})
spellcheck('mbryo') // embryo
````

## Options

* `dictionary` - path to dictionary file (defaults to `/usr/share/dict/words`)
