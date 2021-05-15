const math = require('../lib/math.js');

describe('Checking function quadraticEquation', () => {
  it('3 arguments', () => {
    const a = 1;
    const b = 4;
    const c = -5;
    const result = math.quadraticEquation(a, b, c);
    const expectedResult = [1, -5];

    if (
      result[0] !== expectedResult[0] ||
      result[1] !== expectedResult[1]
    ) {
      throw new Error(`Expected [${expectedResult[0]}, ${expectedResult[1]}], but got [${result[0]},${result[1]}]`);
    }
  });
  
  it('Not arguments', () => {
    const result = math.quadraticEquation();
    if (!(result instanceof Error)) {
      throw new Error(`Expected Error`);
    }
  });

  it('Сomplex root', () => {
    const a = 1;
    const b = 4;
    const c = 100;
    const result = math.quadraticEquation(a, b, c);
    const expectedResult = 'No real roots';

    if (result !== expectedResult) {
      throw new Error(`Expected "${expectedResult}", but got ${result}`);
    }
  });
});