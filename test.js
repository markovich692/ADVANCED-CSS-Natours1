// You are back at your newly acquired decrypting job for the secret organization when a new assignment
//  comes in. Apparently the enemy has been communicating using a device they call "The Mirror".
// It is a rudimentary device with encrypts the message by switching its letter
// with its mirror opposite (A => Z), (B => Y), (C => X) etc.

// Your job is to build a method called "mirror" which will decrypt the messages.
//  Resulting messages will be in lowercase.

// To add more secrecy, you are to accept a second optional parameter,
// telling you which letters or characters are to be reversed; if it is
//  not given, consider the whole alphabet as a default.

// To make it a bit more clear: e.g. in case of "abcdefgh" as the second optional parameter,
//  you replace "a" with "h", "b" with "g" etc. .

// function mirror(code) {
//   const splitInput = code.toLowerCase().split("");
//   let arr = [];
// prettier-ignore
//   const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   const reversedAlphabet = [...alphabet].reverse(); // use a copy so original isn't reversed

//   splitInput.forEach((letter) => {
//     const indexGet = alphabet.findIndex((letterAlph) => {
//       return letterAlph === letter;
//     });

//     reversedAlphabet[indexGet]
//       ? arr.push(reversedAlphabet[indexGet])
//       : arr.push(" ");
//   });

//   return [arr[0].toUpperCase(), ...arr.slice(1)].join("");
// }

// mirror("Welcome home");

///////////////////////////////////////////////////////////////////////////
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const vowelsCount = function(str){

let vowelsNumber=0;
const splitString = str.toLowerCase().split('');
splitString.forEach((letter)=>{

const includesVowels = 'aeiou'.includes(letter) ? 1 : 0;



vowelsNumber = vowelsNumber + includesVowels;



}); 


return vowelsNumber;

};

vowelsCount("abracadabra");
