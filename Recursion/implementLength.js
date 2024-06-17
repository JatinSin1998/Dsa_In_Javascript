function implementlength(string) {
  if (string === "") {
    return 0;
  }

  return 1 + implementlength(string.substring(1));
}

console.log(implementlength("hello"));
