autocorrect
==============

Finds the best matching word using the first smallest Levenshtein distance.

## Usage

### Default options

````javascript
var autocorrect = require('autocorrect')()
autocorrect('mbryo') // embryo
````

### Custom dictionary

````javascript
var wordListPath = require('word-list')
var autocorrect = require('autocorrect')({dictionary: wordListPath})
autocorrect('mbryo') // embryo
````

## Options

* `dictionary` - path to dictionary file (defaults to `/usr/share/dict/words`)
