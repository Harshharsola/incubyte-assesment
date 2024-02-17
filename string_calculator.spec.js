const string_calculator = require("./string_calculator");

describe("test suite for string calculator", () => {
  test("blank string", () => {
    expect(string_calculator("")).toBe(0);
  });
});
