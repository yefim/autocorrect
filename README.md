autocorrect [![Build Status](https://travis-ci.org/yefim/autocorrect.svg?branch=master)](https://travis-ci.org/yefim/autocorrect)
==============

[![NPM](https://nodei.co/npm/autocorrect.png)](https://www.npmjs.com/package/autocorrect)

Finds the best matching word using the first smallest Levenshtein distance.

## Usage

### Default options

````javascript
var autocorrect = require('autocorrect')()
autocorrect('mbryo') // embryo
````

### Custom dictionary path

````javascript
var path = '/usr/share/dict/words'
var autocorrect = require('autocorrect')({dictionary: path})
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
* `dictionary` - path to dictionary file
