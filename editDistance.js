var editDistance = function(a, b) {
  var i, j, cost;
  var d = [[0]];

  for (i = 1; i <= a.length; i++) {
    d[i] = [i];
  }

  for (i = 1; i <= b.length; i++) {
    d[0][i] = i;
  }

  for (j = 1; j <= b.length; j++) {
    for (i = 1; i <= a.length; i++) {
      cost = +(a[i-1] !== b[j-1]);

      d[i][j] = Math.min(
        d[i-1][j] + 1,
        d[i][j-1] + 1,
        d[i-1][j-1] + cost
      );
    }
  }

  return d[a.length][b.length];
};

module.exports = editDistance;
