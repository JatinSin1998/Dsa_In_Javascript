const input = ["(", "(", ")", ")", "(", ")"];

function balancePar(arr, startIndex = 0, currentIndex = 0) {
  // Base case: if we've reached the end of the array, check if currentIndex is 0
  if (startIndex == arr.length) {
    return currentIndex == 0;
  }
  // If currentIndex is negative, parentheses are not balanced
  if (currentIndex < 0) {
    return false;
  }
  // Recursive case: process the current character and move to the next one
  //   if else method
  if (arr[startIndex] == "(") {
    return balancePar(arr, startIndex + 1, currentIndex + 1);
  } else if (arr[startIndex] == ")") {
    return balancePar(arr, startIndex + 1, currentIndex - 1);
  } else if (arr[startIndex] == "{") {
    return balancePar(arr, startIndex + 1, currentIndex + 1);
  } else if (arr[startIndex] == "}") {
    return balancePar(arr, startIndex + 1, currentIndex - 1);
  } else if (arr[startIndex] == "[") {
    return balancePar(arr, startIndex + 1, currentIndex + 1);
  } else if (arr[startIndex] == "]") {
    return balancePar(arr, startIndex + 1, currentIndex - 1);
  } else {
    return false;
  }
}

//  by using stack

function balanceParWithStack(arr, startIndex = 0, stack = []) {
  //  basecase
  if (startIndex === arr.length) {
    return stack?.length === 0;
  }
  const openBarckets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const matchingPair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  // If Barcket are oppening , push it onto the stack
  if (openBarckets.includes(arr[startIndex])) {
    stack.push(arr[startIndex]);
    return balanceParWithStack(arr, startIndex + 1, stack);
  }
  // If the character is a closing bracket
  else if (closeBrackets.includes(arr[startIndex])) {
    console.log(stack, "stack");
    if (stack?.length === 0 || stack.pop() !== matchingPair[arr[startIndex]]) {
      return false;
    }
    return balanceParWithStack(arr, startIndex + 1, stack);
  } else {
    return false;
  }
}

// Example usage
const arr1 = ["(", ")", "(", ")", ")"];
const arr2 = ["(", ")", "{", "}", "(", ")"];
const arr3 = ["[", "{", "}", "(", "(", ")"];
const arr4 = ["[", "{", "}", "(", "(", ")", ")", "]"];

console.log(balanceParWithStack(arr1), "1");
console.log(balanceParWithStack(arr2), "2");
console.log(balanceParWithStack(arr3), "3");
console.log(balanceParWithStack(arr4), "4");
