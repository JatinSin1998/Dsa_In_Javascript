//  Create function to check
function isVowel(char) {
  let loweChar = char.toLowerCase();
  let vowels = "aeiou";
  if (vowels.indexOf(loweChar) != -1) {
    return true;
  } else {
    return false;
  }
}

function countVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("Hello"));

//  recursion part

function recursiveCountVowels(str, strLength) {
  console.log(`Length: ${strLength}, Current String : ${str[strLength - 1]}`);
  if (strLength == 1) {
    console.log("Base Case Hit");
    console.log("base case : ", Number(isVowel(str[0])));
    return Number(isVowel(str[0]));
  }
  let recursive = recursiveCountVowels(str, strLength - 1);
  let result = isVowel(str[strLength - 1]) + recursive;
  console.log(`Count after checking ${str[strLength - 1]}: ${result}`);
  return result;
}
let mystr = "hello";
console.log(recursiveCountVowels(mystr, mystr?.length));
