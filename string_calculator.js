function string_calculator(inputString) {
  if (inputString.trim().length === 0) {
    return 0;
  }
  let numberArray = inputString.trim().split(",");

  let sum = 0;
  numberArray.forEach((number) => {
    sum += +number;
  });
  return sum;
}
module.exports = string_calculator;
