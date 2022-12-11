// function parseNumber(input) {
//   let number = "";
//   let index = 0;

//   // Loop through each character in the input string
//   while (index < input.length) {
//     // Get the current character
//     const char = input[index];

//     // If the character is a digit, add it to the number string
//     if (char >= "0" && char <= "9") {
//       number += char;
//     }
//     // If the character is a decimal point, add it to the number string
//     else if (char === ".") {
//       number += char;
//     }
//     // If the character is a negative sign, add it to the number string
//     else if (char === "-") {
//       number += char;
//     }
//     // If the character is not a digit, decimal point, or negative sign,
//     // we've reached the end of the number
//     else {
//       break;
//     }

//     // Move to the next character in the input string
//     index++;
//   }

//   // Return the parsed number as a floating point value
//   return parseFloat(number);
// }

// // const input = "The price is $19";
// const number = parseNumber("The price is $19");

// console.log(number);  // Output: 19.99

function parseNumber(input) {
  let number = 0;
  let inputArray = input.split("");
  let negative = false;

  if (inputArray[0] === "-") {
    negative = true;
    inputArray = inputArray.slice(1);
  }

  inputArray.forEach((char) => {
    number = number * 10 + parseInt(char);
  });

  return negative ? -number : number;
}
console.log(parseNumber("123")); // returns 123
console.log(parseNumber("-45")); // returns -456


function parseNumber1(str) {
    return Number(str);
  }
  const num = parseNumber1("34");
  console.log(num)