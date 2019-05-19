// todo fix fraction
export function add(n1: number, n2: number): number {
  if (isNegative(n1)) {
    if (isNegative(n2)) {
      return Number("-".concat(add(Math.abs(n1), Math.abs(n2)).toString()));
    } else {
      return addPosToNeg(Array(Math.abs(n1)), Array(n2), []);
    }
  } else if (isNegative(n2)) {
    return subtract(n1, Math.abs(n2));
  } else {
    return Array(n1).concat(Array(n2)).length;
  }
}

function addPosToNeg(negNums: any[], posNums: any[], result: any[]): number {
  if (posNums.length) {
    if (negNums.length) {
      return addPosToNeg(negNums.slice(1), posNums.slice(1), result)
    } else {
      return addPosToNeg(negNums.slice(1), posNums.slice(1), result.concat(Array(1)));
    }
  } else {
    if (negNums.length) {
      return Number("-".concat(negNums.length.toString()));
    }
    return result.length;
  }
}

export function subtract(n1: number, n2: number): number {
  if (isNegative(n1)) {
    if (isNegative(n2)) {
      return add(n1, Math.abs(n2));
    } else {
      return Number("-".concat(add(Math.abs(n1), n2).toString()));
    }
  } else if (isNegative(n2)) {
    return add(n1, Math.abs(n2));
  } else {
    const positive = Array(n1);
    const negative = [];
    Array(n2).fill('+').forEach(() => {
      if (positive.length) {
        positive.pop();
      } else {
        negative.push('+');
      }
    });
    if (positive.length) {
      return positive.length;
    } else {
      if (negative.length) {
        return Number("-".concat(negative.length.toString()));
      } else {
        return negative.length;
      }
    }
  }
}

export function multiply(n1: number, n2: number) {
  let product: string[] = [];
  const multiplicand = Array(Math.abs(n1)).fill('-');
  multiplicand.forEach(_ => {
    product = product.concat(Array(Math.abs(n2)));
  });
  if (isNegative(n1)) {
    if (isNegative(n2)) {
      return product.length
    } else {
      return Number("-".concat(product.length.toString()));
    }
  } else if (isNegative(n2)) {
    return Number("-".concat(product.length.toString()));
  } else {
    return product.length
  }
}

export function divide(dividend: number, divisor: number, precision: number = 2): number {
  let { whole, remainder } = integerDivision(Math.abs(dividend), Math.abs(divisor));
  let prefix = '';
  if (isNegative(dividend)) {
    prefix = '-';
  }
  if (isNegative(divisor)) {
    prefix = '-';
  }

  let result: number;
  if (remainder) {
    if (precision) {
      const fraction = getFraction(remainder, divisor, precision);
      // todo use addition once it's fixed
      result = Number(whole.toString().concat(".").concat(fraction.toString()));
    } else {
      result = whole;
    }
  } else {
    result = whole;
  }
  return Number(prefix.concat(result.toString()));
}

export function integerDivision(n1: number, n2: number): { whole: number, remainder: number } {
  let wholeDivisions = 0;
  let removedItems = 0;
  let remainder = 0;
  const divisorIsNotZero = multiply(Array(n2).length, 1); // todo check if negative - checkIfZero?

  if (divisorIsNotZero) {
    let dividend = Array(n1);
    while (dividend.length) {
      removedItems = dividend.splice(0, n2).length;
      const haveRemainder = subtract(n2, removedItems);
      if (haveRemainder) {
        remainder = removedItems;
      } else {
        wholeDivisions = add(wholeDivisions, 1);
      }
      if (wholeDivisions) { } else {
        removedItems = n2;
      }
    }
  } else {
    throw new Error("Don't be silly");
  }

  return {
    whole: wholeDivisions,
    remainder,
  }
}

function getFraction(remainder: number, divisor: number, precision: number): number {
  const multiplier = 10;
  let iterations = precision;
  let fraction = '';
  let rem = remainder;
  while (iterations) {
    const dividend = multiply(rem, multiplier);
    const res = integerDivision(dividend, divisor);
    fraction = fraction.concat(res.whole.toString());
    iterations = subtract(iterations, 1);
    rem = res.remainder;
  }
  return Number(fraction);
}

function isNegative(n: number): boolean {
  return n.toString().startsWith('-');
}
