let a;
do {
  a = parseFloat(prompt('Enter A. A ≠ 0'));
  if (a === 0) {
    alert('PLEASE don`t ENTER 0');
  }
} while (a === 0);
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

function solveQuadrEq(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  if (d > 0) {
    const xOne = (-b + Math.sqrt(d)) / (2 * a);
    const xTwo = (-b - Math.sqrt(d)) / (2 * a);
    return 'X1 = ' + xOne + ' X2 = ' + xTwo;
  } else if (d === 0) {
    return 'x = ' + -b / (2 * a);
  }
  return 'No solutions';
}

alert(solveQuadrEq(a, b, c));
