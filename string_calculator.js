function string_calculator(inputString) {
  if (inputString.trim().length === 0) {
    return 0;
  }
  let delimiter = ",";
  let isDellimitterDefined = false;
  if (inputString.slice(0, 2) === "//" && inputString[3] === "\n") {
    delimiter = inputString[2];
    isDellimitterDefined = true;
  }
  let numberArray;
  if (isDellimitterDefined) {
    numberArray = inputString.trim().split(delimiter);
  } else {
    numberArray = inputString.trim().split(/[\n|,]/g);
  }

  let sum = 0;
  let negativeNumberString = "";
  let negativeNumbersExist = false;
  numberArray.forEach((number) => {
    if (+number) {
      if (+number < 0) {
        negativeNumbersExist = true;
        negativeNumberString += number + ",";
      }
      sum += +number;
    }
  });
  if (negativeNumbersExist) {
    throw new Error("negative numbers not allowed " + negativeNumberString);
  }

  return sum;
}
module.exports = string_calculator;
