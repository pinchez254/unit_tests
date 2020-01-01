const lib = require("../lib");

describe("Absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it(" should return a zero if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greetings", () => {
  it("should return the greetings message", () => {
    const result = lib.greet("pinchez");
    expect(result).toMatch(/pinchez/);
  });
});
