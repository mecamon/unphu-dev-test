import { describe, it, expect } from "vitest";
import { validEmail, validPassword, required, minLength } from "./validators";

describe("validEmail tests", () => {
  const validEmailTests = [
    { testName: "invalid-entry-1", entry: "not-valid.com", expected: false },
    { testName: "invalid-entry-2", entry: "not@validcom", expected: false },
    { testName: "valid-entry", entry: "valid@mail.com", expected: true },
  ];

  validEmailTests.forEach((tt) => {
    it(tt.testName, () => {
      const results = validEmail(tt.entry);
      expect(results).toEqual(tt.expected);
    });
  });
});

describe("validPassword tests", () => {
  const validPasswordTests = [
    {
      testName: "invalid-pass-1",
      entry: "password-invalid-22",
      expected: false,
    },
    { testName: "invalid-pass-1", entry: "passwordInvalid", expected: false },
    { testName: "valid-pass", entry: "passwordValid123", expected: true },
  ];

  validPasswordTests.forEach((tt) => {
    it(tt.testName, () => {
      const result = validPassword(tt.entry);
      expect(result).toEqual(tt.expected);
    });
  });
});

describe("required tests", () => {
  const requiredTest = [
    { testName: "valid string input", entry: "Jonh", expected: true },
    { testName: "invalid string input", entry: "", expected: false },
    { testName: "invalid number input", entry: undefined, expected: false },
    { testName: "valid number input", entry: 323, expected: true },
  ];
  requiredTest.forEach((tt) => {
    it(tt.testName, () => {
      const result = required(tt.entry);
      expect(result).toEqual(tt.expected);
    });
  });
});

describe("minLength tests", () => {
  const min = 3;
  const minLengthTests = [
    { testName: "valid input", entry: "Jonh", expected: true },
    { testName: "invalid input", entry: "jj", expected: false },
  ];
  minLengthTests.forEach((tt) => {
    it(tt.testName, () => {
      const calcMinLenght = minLength(min);
      const result = calcMinLenght(tt.entry);
      expect(result).toBe(tt.expected);
    });
  });
});
