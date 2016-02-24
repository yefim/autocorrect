var editDistance = function(s, t) {
  if (s === t) {
    return 0
  }

  if (s === '' || t === '') {
    return Math.max(s.length, t.length)
  }

  var v0 = []
  var v1 = []
  var i, j, cost

  for (i = 0; i <= t.length; i++) {
    v0[i] = i
  }

  for (i = 0; i < s.length; i++) {
    v1[0] = i + 1
    for (j = 0; j < t.length; j++) {
      cost = +(s[i] !== t[j])
      v1[j+1] = Math.min(
        v1[j] + 1,
        v0[j+1] + 1,
        v0[j] + cost
      )
    }

    for (j = 0; j < v0.length; j++) {
      v0[j] = v1[j]
    }
  }

  return v1[t.length]
}

module.exports = editDistance
