const lib = require("../lib");
test("Absolute- should return a positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("Absolute- should return a positive number if input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});
test("Absolute- should return a zero if input is zero", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
