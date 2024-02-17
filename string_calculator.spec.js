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

  test("sum of 5\n6,7,8,9", () => {
    expect(string_calculator("5\n6,7,8,9")).toBe(35);
  });

  test("sum of //;\n1;2", () => {
    expect(string_calculator("//;\n1;2")).toBe(3);
  });

  test("define delimiter //;\n1;2", () => {
    expect(string_calculator("//;\n1;2")).toBe(3);
  });

  test("negative number", () => {
    try {
      string_calculator("-3,2");
    } catch (e) {
      expect(e.message).toBe("negative numbers not allowed -3,");
    }
  });

  test("multiple negative number -9,-2,3", () => {
    try {
      string_calculator("-9,-2,3");
    } catch (e) {
      expect(e.message).toBe("negative numbers not allowed -9,-2,");
    }
  });

  test("invalid input 1,\n", () => {
    try {
      string_calculator("1,\n");
    } catch (e) {
      expect(e.message).toBe("invalid input");
    }
  });

  test("invalid input 2,3,4,1,\n,5,6,7", () => {
    try {
      string_calculator("2,3,4,1,\n,5,6,7");
    } catch (e) {
      expect(e.message).toBe("invalid input");
    }
  });
});
