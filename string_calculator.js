function string_calculator(inputString) {
  if (inputString.trim().length === 0) {
    return 0;
  }
  let regexForAnything = /[^0-9.]/g;
  let numberArray = inputString.trim().split(regexForAnything);

  let sum = 0;
  numberArray.forEach((number) => {
    sum += +number;
  });
  return sum;
}
module.exports = string_calculator;
