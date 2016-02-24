var editDistance = function(a, b) {
  if (a === '' || b === '') {
    return Math.max(a.length, b.length);
  }

  return +(a[0] !== b[0]) + Math.min(
    editDistance(a.substring(1), b.substring(1)),
    editDistance(a.substring(1), b),
    editDistance(a, b.substring(1))
  );
};

module.exports = editDistance;
