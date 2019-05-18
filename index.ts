// todo fix fraction
export function add(n1: number, n2: number): number {
  if (isNegative(n1)) {
    if (isNegative(n2)) {
      return Number("-".concat(add(Math.abs(n1), Math.abs(n2)).toString()));
    } else {
      const negative = Array(Math.abs(n1));
      const positive = [];
      Array(n2).fill("-").forEach(() => {
        if (negative.length) {
          negative.pop();
        } else {
          positive.push("-");
        }
      });
      if (negative.length) {
        return Number("-".concat(negative.length.toString()));
      } else {
        return positive.length;
      }
    }
  } else if (isNegative(n2)) {
    return subtract(n1, Math.abs(n2));
  } else {
    return Array(n1).concat(Array(n2)).length;
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
  const { whole, remainder } = integerDivision(dividend, divisor);
  console.log({ whole, remainder });
  if (remainder) {
    if (precision) {
      const fraction = getFraction(remainder, divisor, precision);
      // todo use addition once it's fixed
      return Number(whole.toString().concat(".").concat((fraction * 10).toString())); // todo
    } else {
      return whole;
    }
  } else {
    return whole;
  }
}

export function integerDivision(n1: number, n2: number): { whole: number, remainder: number } {
  console.log(`dividing ${n1} / ${n2}`);
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
  if (precision) {
    if (isNegative(precision)) {
      throw new Error("Precision must be >= 1")
    }
  } else { throw new Error("Precision must be set") }

  const multiplier = 10;
  let iterations = precision;
  let fraction = '';
  let rem = remainder;
  while (iterations) {
    const dividend = multiply(rem, multiplier);
    const res = integerDivision(dividend, divisor);
    fraction = fraction.concat(res.whole.toString()); // todo divide by multiplier?
    iterations = subtract(iterations, 1);
    rem = res.remainder;
  }
  return Number(fraction) / multiplier; // todo
}

function isNegative(n: number): boolean {
  return n.toString().startsWith('-');
}
