// [1,2,4,2,4,2,6]
// key = 2

function countKey(arr, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === key) {
      count++;
    }
  }
  return count;
}

function recCountKey(arr, key, index = 0) {
  if (index >= arr?.length) {
    return 0;
  }

  return (arr[index] === key ? 1 : 0) + recCountKey(arr, key, index + 1);
}
const array = [1, 2, 4, 2, 4, 2, 6];
const key = 2;
console.log(recCountKey(array, key, (index = 0)));
