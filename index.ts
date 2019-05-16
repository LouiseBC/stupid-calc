export function add(n1: number, n2: number) {
  const counter = Array(n1).concat(Array(n2));
  return counter.length;
}

export function subtract(n1: number, n2: number) {
  const _var1 = Array(n1);
  _var1.splice(0, n2)
  return _var1.length;
}

export function multiply(n1: string, n2: string) {
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
    target.splice(0, n2); 
    notRemainder = notRemainder.concat(Array(1));
  }
  // Todo calculate remainder
  return notRemainder.length;
}