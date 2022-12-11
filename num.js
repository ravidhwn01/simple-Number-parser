// function parseExpression(str) {
//     // Split the string on the plus and minus signs
//     const parts = str.split(/[+-]/);

//     // Start the result at 0
//     let result = 0;

//     // Loop through the parts of the expression
//     for (let i = 0; i < parts.length; i++) {
//       // Convert the part to a number
//       const num = Number(parts[i]);

//       // If the part is not a number, throw an error
//       if (isNaN(num)) {
//         throw new Error("Invalid expression: " + str);
//       }

//       // If this is the first part of the expression, add it to the result
//       if (i === 0) {
//         result += num;
//       }
//       // If this part is preceded by a plus sign, add it to the result
//       else if (str[str.indexOf(parts[i]) - 1] === "+") {
//         result += num;
//       }
//       // If this part is preceded by a minus sign, subtract it from the result
//       else {
//         result -= num;
//       }
//     }

//     return result;
//   }

//   const result = parseExpression("1+2+2");
//     console.log(result);

function parseExpression(str) {
  // Split the string on the plus, minus, multiplication, and division signs
  const parts = str.split(/[+-/*]/);

  // Start the result at 0
  let result = 0;

  // Loop through the parts of the expression
  for (let i = 0; i < parts.length; i++) {
    // Convert the part to a number
    const num = Number(parts[i]);

    // If the part is not a number, throw an error
    if (isNaN(num)) {
      throw new Error("Invalid expression: " + str);
    }

    // If this is the first part of the expression, set the result to the value of the first number
    if (i === 0) {
      result = num;
    }
    // If this part is preceded by a plus sign, add it to the result
    else if (str[str.indexOf(parts[i]) - 1] === "+") {
      result += num;
    }
    // If this part is preceded by a minus sign, subtract it from the result
    else if (str[str.indexOf(parts[i]) - 1] === "-") {
      result -= num;
    }
    // If this part is preceded by a multiplication sign, multiply it by the result
    else if (str[str.indexOf(parts[i]) - 1] === "*") {
      result *= num;
    }
    // If this part is preceded by a division sign, divide the result by it
    else {
      result /= num;
    }
  }

  return result;
}

const result = parseExpression("23 3");
console.log(result);
