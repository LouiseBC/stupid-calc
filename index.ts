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
    return subtractPositiveNumbers(Array(n1), Array(n2), []);
  }
}

function subtractPositiveNumbers(aboveZero: any[], toSubtract: any[], belowZero: any[]): number {
  if (toSubtract.length) {
    if (aboveZero.length) {
      return subtractPositiveNumbers(aboveZero.slice(1), toSubtract.slice(1), belowZero);
    } else {
      return subtractPositiveNumbers(aboveZero, toSubtract.slice(1), belowZero.concat(Array(1)));
    }
  } else {
    if (belowZero.length) {
      return Number("-".concat(belowZero.length.toString()));
    } else {
      return aboveZero.length;
    }
  }
}


export function multiply(n1: number, n2: number) {
  return _multiply(Array(Math.abs(n1)), Array(Math.abs(n2)), getResultPrefix(n1, n2), []);
}

function _multiply(n1: any[], n2: any[], resultPrefix: string, result: any[]): number {
  if (n2.length) {
    return _multiply(n1, n2.slice(1), resultPrefix, result.concat(Array(n1.length)));
  } else {
    return Number(resultPrefix.concat(result.length.toString()));
  }
}

function getResultPrefix(n1: number, n2: number): string {
  if (isNegative(n1)) {
    if (isNegative(n2)) {
      return "";
    } else {
      return "-";
    }
  } else if (isNegative(n2)) {
    return "-";
  } else {
    return "";
  }
}

export function divide(dividend: number, divisor: number, precision: number = 2): number {
  if (multiply(Array(Math.abs(divisor)).length, 1)) { } else { // todo check if negative - checkIfZero?
    throw new Error("Don't be silly");
  }

  let { whole, remainder } = integerDivision(Math.abs(dividend), Math.abs(divisor));
  let prefix = getResultPrefix(dividend, divisor);

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

export function _divide(dividend: any[], divisor: number, precision: any[], prefix: string, wholeDivs: any[], remainder: any[] = []): number {
  if (dividend.length) {
    if (subtract(dividend.slice(-divisor).length, divisor)) { // have remainder
      return _divide(dividend.slice(divisor), divisor, precision, prefix, wholeDivs, dividend.slice(-divisor))
    } else { // no remainder
      return _divide(dividend.slice(divisor), divisor, precision, prefix, wholeDivs.concat(Array(1)), remainder)
    }
  } else {
    // return getFraction(remainder.length, divisor, precision.length);
  }
}

function getFraction(remainder: number, divisor: number, precision: number): number {
  if (subtract(multiply(precision, precision), multiply(precision, precision))) {
    throw new Error("Precision must be larger than 0");
  }
  return _getFraction(multiply(remainder, 10), divisor, precision);
}

function _getFraction(dividend: number, divisor: number, precision: number): number {
  if (precision) {
    return _getFraction(multiply(remainder, 10), divisor, subtract(precision, 1));
  }
  let iterations = precision;
  let fraction = '';
  while (iterations) {
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
