spellcheck
==============

Finds the best matching word using the first smallest Levenshtein distance.

## Usage

````javascript
var spellcheck = require('spellcheck')()
spellcheck('mbryo') // embryo
````

## Options

* `dictionary` - path to dictionary file (defaults to `/usr/share/dict/words`)
