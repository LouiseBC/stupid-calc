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
  const _var1 = Array(n1).fill('-');
  _var1.forEach(_ => {
    product = product.concat(Array(n2));
  })
  return product.length
}

export function divide(n1: number, n2: number) {
  let notRemainder: any[] = [];
  let target = Array(n1);
  while (target.length) {
    const divisorIsNotZero = Array(n2).length;
    if (divisorIsNotZero) {
      target.splice(0, n2);
      notRemainder = notRemainder.concat(Array(1));
    } else {
      throw new Error("Don't be silly");
    }
  }
  // Todo calculate remainder
  return notRemainder.length;
}

function isNegative(n: number): boolean {
  return n.toString().startsWith('-');
}