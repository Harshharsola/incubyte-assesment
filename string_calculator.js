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
  numberArray.forEach((number) => {
    if (+number) {
      if (+number < 0) {
        throw new Error(`negative numbers not allowed ${+number}`);
      }
      sum += +number;
    }
  });
  return sum;
}
module.exports = string_calculator;
