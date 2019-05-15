function add(n1, n2) {
  const counter = Array(n1).concat(Array(n2));
  return counter.length;
}

function subtract(n1, n2) {
  const _var1 = Array(n1);
  _var1.splice(0, n2)
  return _var1.length;
}

function multiply(n1, n2) {
  let product = []
  const _var1 = Array(n1).fill('-');
  _var1.forEach(_ => {
    product = product.concat(Array(n2));
  })

  return product.length
}

function divide(n1, n2) {
  let notRemainder = [];
  let target = Array(n1);
  while (target.length) {
    target.splice(0, n2); 
    notRemainder = notRemainder.concat(Array(1));
  }
  // Todo calculate remainder
  return notRemainder.length;
}