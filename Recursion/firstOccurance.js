let array = [3, 4, 1, 8, 1, 7];
let findMe = 1;
let currentIndex = 0;
//  -> output = 2
// if not found = -1
//  Itertor method
function firstOccurance(arr, currIndex, findMe) {
  while (currIndex < arr.length) {
    if (arr[currIndex] === findMe) {
      return currIndex;
    }
    currIndex += 1;
  }
  return -1;
}

// recursive

function recursiveFirstOccurance(arr, currentIndex, findMe) {
  console.log(
    "current Index: ",
    currentIndex,
    "and array value :",
    arr[currentIndex]
  );
  if (currentIndex > arr.length) {
    return -1;
  }

  if (arr[currentIndex] === findMe) {
    return currentIndex;
  }
  return recursiveFirstOccurance(arr, currentIndex + 1, findMe);
}

console.log(recursiveFirstOccurance(array, currentIndex, findMe));
