import { add, subtract, multiply, divide } from "../index";

describe("Stupid calculator", () => {

  describe("addition", () => {
    test("0 + 0", () => {
      expect(add(0, 0)).toBe(0);
    });
    test("2 + 3", () => {
      expect(add(2, 3)).toBe(5);
    });
    test("2 + -3", () => {
      expect(add(2, -3)).toBe(-1);
    });
    test("-2 + 3", () => {
      expect(add(-2, 3)).toBe(1);
    })
    test("-2 + -3", () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe("subtraction", () => {
    test("0 - 0", () => {
      expect(subtract(0, 0)).toBe(0);
    })
    test("3 - 5", () => {
      expect(subtract(3, 5)).toBe(-2);
    });
    test("5 - 3", () => {
      expect(subtract(5, 3)).toBe(2);
    });
    test("5 - -3", () => {
      expect(subtract(5, -3)).toBe(8);
    });
    test("-5 - 3", () => {
      expect(subtract(-5, 3)).toBe(-8);
    })
    test("-5 - -3", () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe("multiplication", () => {
    test("0 * 0", () => {
      expect(multiply(0, 0)).toBe(0);
    });
    test("2 * 5", () => {
      expect(multiply(2, 5)).toBe(10);
    });
    test("2 * -5", () => {
      expect(multiply(2, -5)).toBe(-10);
    });
    test("-2 * 5", () => {
      expect(multiply(-2, 5)).toBe(-10);
    });
    test("-2 * -5", () => {
      expect(multiply(-2, -5)).toBe(10);
    });
  });

  describe("division", () => {
    test("10 / 0", () => {
      expect(divide(10, 0)).toThrowError();
    });
    test("0 / 10", () => {
      expect(divide(0, 10)).toBe(0);
    });
  });
});