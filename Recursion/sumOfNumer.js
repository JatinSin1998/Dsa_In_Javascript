// sum of number till n

function getASum(value) {
  if (value === 1) {
    return value;
  }
  return value + getASum(value - 1);
}
