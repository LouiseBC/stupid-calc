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
  return _multiply(Array(Math.abs(n1)), Array(Math.abs(n2)), getResultPrefix(n1, n2));
}

function _multiply(n1: any[], n2: any[], resultPrefix: string, result: any[] = []): number {
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
  if (multiply(Array(Math.abs(divisor)).length, 1)) { } else {
    throw new Error("Don't be silly");
  }
  return _divide(Array(Math.abs(dividend)), Math.abs(divisor), [], [], precision, getResultPrefix(dividend, divisor));
}

function _divide(dividend: any[], divisor: number, wholeDivs: any[], remainder: any[], precision: number, prefix: string): number {
  if (dividend.length) {
    if (subtract(dividend.slice(-divisor).length, divisor)) {
      return _divide(dividend.slice(divisor), divisor, wholeDivs, dividend.slice(-divisor), precision, prefix)
    } else {
      return _divide(dividend.slice(divisor), divisor, wholeDivs.concat(Array(1)), remainder, precision, prefix)
    }
  } else {
    if (precision) {
      if (remainder.length) {
        return Number(prefix.concat(wholeDivs.length.toString()).concat(".")
          .concat(divide(multiply(remainder.length, Math.pow(10, precision)), divisor, 0).toString()));
      } else {
        return Number(prefix.concat(wholeDivs.length.toString()));
      }
    }
    else {
      return Number(prefix.concat(wholeDivs.length.toString()));
    }
  }
}

function isNegative(n: number): boolean {
  return n.toString().startsWith('-');
}