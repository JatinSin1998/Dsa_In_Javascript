// let inputString = "aabcc"

// let i = 1

//  console.log(inputString.substing(0,i));
//  console.log(inputString.substing(i));
//  console.log(inputString.substing(0,i) + inputString.substing(i));
// iterating solution
function removeADJDup(inputStr) {
  let result = "";
  for (let i = 0; i < inputStr.length; i++) {
    if (i === inputStr.length - 1 || inputStr[i] !== inputStr[i + 1]) {
      result += inputStr[i];
    }
  }
  return result;
}

// recursive Solution

function recursiveRad(inputStr) {
  if (inputStr.length <= 1) {
    return inputStr;
  }

  if (inputStr[0] === inputStr[1]) {
    return recursiveRad(inputStr.substring(1));
  }
  return recursiveRad(inputStr[0] + recursiveRad(inputStr.substring(1)));
}
