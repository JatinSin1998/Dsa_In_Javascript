// iterative approch

function fibanacci(value) {
  let n0 = 0;
  let n1 = 1;
  for (let i = 0; i < value; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}

function recursiveFibanacco(value) {
  if (value <= 1) {
    return value;
  }

  return recursiveFibanacco(value - 1) + recursiveFibanacco(value - 2);
}

console.log(recursiveFibanacco(6));
