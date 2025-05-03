// Write a function that returns a sequence (index begins with 1)
// of all the even characters from a string. If the string is smaller
//  than two characters or longer than 100 characters,
//  the function should return "invalid string".

function evenChars(string) {
  const strSplit = string.split("");

  if (strSplit.length === 1 || strSplit.length > 100 || string === "")
    return "invalid string";

  const newStringArray = strSplit
    .map((letter, i) => {
      const index = i + 1;
      return index % 2 === 0 ? letter : " ";
    })
    .filter((letter) => letter !== " ");

  return newStringArray;
}
