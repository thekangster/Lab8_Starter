// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

// phone numbers
test("should work with formatting", () => {
  expect(functions.isPhoneNumber("(760) 994-5462")).toBe(true);
});
test("should work with dashes", () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test("letters should not be included", () => {
  expect(functions.isPhoneNumber("abc-123-abcd")).toBe(false);
});
test("must be 10 digits", () => {
  expect(functions.isPhoneNumber("123123123")).toBe(false);
});

// email
test("should work with ucsd domain", () => {
  expect(functions.isEmail("ktkang@ucsd.edu")).toBe(true);
});
test("should work with gmail domain", () => {
  expect(functions.isEmail("ktkang@gmail.edu")).toBe(true);
});
test("should not work without @", () => {
  expect(functions.isPhoneNumber("ktkanggmail.com")).toBe(false);
});
test("should not work without valid domain", () => {
  expect(functions.isPhoneNumber("ktkang@gmailcom")).toBe(false);
});

// strong password
test("valid password: a123", () => {
  expect(functions.isStrongPassword("a123")).toBe(true);
});
test("valid password: password1", () => {
  expect(functions.isStrongPassword("password1")).toBe(true);
});
test("should be > 3 characters", () => {
  expect(functions.isStrongPassword("12")).toBe(false);
});
test("should be < 14 characters", () => {
  expect(functions.isStrongPassword("123456789123456")).toBe(false);
});

// dates
test("valid date 05/13/2002", () => {
  expect(functions.isDate("05/13/2002")).toBe(true);
});
test("valid date 5/1/2023", () => {
  expect(functions.isDate("5/1/2023")).toBe(true);
});
test("no 2 character year", () => {
  expect(functions.isDate("5/1/23")).toBe(false);
});
test("invalid date 13/132013", () => {
  expect(functions.isDate("13/132013")).toBe(false);
});

// hex
test("valid 6 character hex", () => {
  expect(functions.isHexColor("#000000")).toBe(true);
});
test("valid 3 character hex", () => {
  expect(functions.isHexColor("#FFF")).toBe(true);
});
test("must be a hex color", () => {
  expect(functions.isHexColor("hsl(0,40%,80%,0.5)")).toBe(false);
});
test("must be a valid color", () => {
  expect(functions.isHexColor("#deadbeef")).toBe(false);
});
