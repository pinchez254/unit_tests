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

describe("testing arrays-currencies", () => {
  it("should contain mentioned currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("Test objects", () => {
  it("should contain objects with id and price ", () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});
