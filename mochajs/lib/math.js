function quadraticEquation(a, b, c) {
  if (
    a === undefined ||
    b === undefined ||
    c === undefined
  ) {
    return new Error('Error function quadraticEquation, 3 Argument required');
  }

  const D = b ** 2 - (4 * a * c);
  if (D < 0) {
    return 'No real roots';
  }
  if (D === 0) {
    return -b / (2 * a);
  }
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  return [x1, x2];
}

module.exports.quadraticEquation = quadraticEquation;