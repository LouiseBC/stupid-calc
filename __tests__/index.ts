import { add, subtract, multiply, divide } from "../src/index";

describe("Stupid calculator", () => {

  describe("addition", () => {
    describe("positive numbers", () => {
      test("0 + 0", () => {
        expect(add(0, 0)).toBe(0);
      });
      test("2 + 3", () => {
        expect(add(2, 3)).toBe(5);
      });
    });
    describe("negative numbers", () => {
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
    xdescribe("fractions", () => {
      test("0.5 + 0.5", () => {
        expect(add(0.5, 0.5)).toBe(1);
      });
      test("0.3 + 0.88", () => {
        expect(add(0.3, 0.88)).toBe(1.18)
      });
    });
  });

  describe("subtraction", () => {
    describe("positive numbers", () => {
      test("0 - 0", () => {
        expect(subtract(0, 0)).toBe(0);
      })
      test("3 - 5", () => {
        expect(subtract(3, 5)).toBe(-2);
      });
      test("5 - 3", () => {
        expect(subtract(5, 3)).toBe(2);
      });
    });
    describe("negative numbers", () => {
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
    xdescribe("fractions", () => {
      test("0.3 - 0.5", () => {
        expect(subtract(0.3, 0.5)).toBe(-0.2);
      });
      test("0.92 - 0.4", () => {
        expect(subtract(0.92, 0.4)).toBe(0.52);
      });
    });
  });

  describe("multiplication", () => {
    describe("positive numbers", () => {
      test("0 * 0", () => {
        expect(multiply(0, 0)).toBe(0);
      });
      test("2 * 5", () => {
        expect(multiply(2, 5)).toBe(10);
      });
    });
    describe("negative numbers", () => {
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
    xdescribe("fractions", () => {
      test("0.5 * 0.5", () => {
        expect(multiply(0.5, 0.5)).toBe(0.25);
      });
      test("0.11 * 0.9", () => {
        expect(multiply(0.11, 0.9)).toBe(0.099);
      });
    });
  });

  describe("division", () => {
    describe("dividend > divisor", () => {
      test("10 / 0", () => {
        // todo actually fix this
        try {
          expect(divide(10, 0)).toThrow();
          throw new Error();
        } catch (err) {
          expect(err.message).toBe("Don't be silly");
        }
      });
      test("10 / 2", () => {
        expect(divide(10, 2)).toBe(5);
      });
      test("10 / 4", () => {
        expect(divide(10, 4)).toBe(2.5);
      });
      test("9 / 4", () => {
        expect(divide(9, 4)).toBe(2.25);
      });
      test("10 / 3", () => {
        expect(divide(10, 3, 2)).toBe(3.33);
        expect(divide(10, 3, 4)).toBe(3.3333);
      });
    });
    describe("divisor > dividend", () => {
      test("0 / 10", () => {
        expect(divide(0, 10)).toBe(0);
      });
      test("1 / 4", () => {
        expect(divide(1, 4)).toBe(0.25);
      });
      test("3 / 6", () => {
        expect(divide(3, 6)).toBe(0.5);
      });
      test("1 / 8", () => {
        expect(divide(1, 8, 3)).toBe(0.125)
      });
    });
    describe("negatives", () => {
      test("10 / -2", () => {
        expect(divide(10, -2)).toBe(-5);
      });
      test("-10 / 2", () => {
        expect(divide(-10, 2)).toBe(-5)
      });
      test("-7 / -2", () => {
        expect(divide(-7, -2)).toBe(3.5)
      });
      test("-10 / 3", () => {
        expect(divide(-10, 3, 0)).toBe(-3);
      });
    });
    xdescribe("fractions", () => {
      test("0.5 / 0.5", () => {
        expect(divide(0.5, 0.5)).toBe(1);
      });
    });
  });
});