const string_calculator = require("./string_calculator");

describe("test suite for string calculator", () => {
  test("blank string", () => {
    expect(string_calculator("")).toBe(0);
  });

  test("sum of 5,6", () => {
    expect(string_calculator("5,6")).toBe(11);
  });

  test("sum of 5,6,7,8,9", () => {
    expect(string_calculator("5,6,7,8,9")).toBe(35);
  });
});
