// task is to remove all tabs and spaces from a string.
// This includer the charcter /t and " " from a string

// Itreative Approach

function removeTas(inputStr) {
  let result = "";
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];
    if (char !== " " && char !== "\t") {
      result += char;
    }
  }
  return result;
}

// console.log(removeTas("hell o0 0"));

// Recursive Approch

function recursiveRtas(inputStr) {
  if (inputStr.length === 0) {
    return "";
  }
  const firstChar = inputStr[0];
  const restofString = inputStr.slice(1);

  if (firstChar === " " || firstChar === "\t") {
    return recursiveRtas(restofString);
  }

  return firstChar + recursiveRtas(restofString);
}

console.log(recursiveRtas(" clearhell o0 0"));
