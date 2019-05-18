import { add, subtract, multiply, divide } from "../index";

describe("Stupid calculator", () => {

  // describe("addition", () => {
  //   test("0 + 0", () => {
  //     expect(add(0, 0)).toBe(0);
  //   });
  //   test("2 + 3", () => {
  //     expect(add(2, 3)).toBe(5);
  //   });
  //   test("2 + -3", () => {
  //     expect(add(2, -3)).toBe(-1);
  //   });
  //   test("-2 + 3", () => {
  //     expect(add(-2, 3)).toBe(1);
  //   })
  //   test("-2 + -3", () => {
  //     expect(add(-2, -3)).toBe(-5);
  //   });
  // });

  // describe("subtraction", () => {
  //   test("0 - 0", () => {
  //     expect(subtract(0, 0)).toBe(0);
  //   })
  //   test("3 - 5", () => {
  //     expect(subtract(3, 5)).toBe(-2);
  //   });
  //   test("5 - 3", () => {
  //     expect(subtract(5, 3)).toBe(2);
  //   });
  //   test("5 - -3", () => {
  //     expect(subtract(5, -3)).toBe(8);
  //   });
  //   test("-5 - 3", () => {
  //     expect(subtract(-5, 3)).toBe(-8);
  //   })
  //   test("-5 - -3", () => {
  //     expect(subtract(-5, -3)).toBe(-2);
  //   });
  // });

  // describe("multiplication", () => {
  //   test("0 * 0", () => {
  //     expect(multiply(0, 0)).toBe(0);
  //   });
  //   test("2 * 5", () => {
  //     expect(multiply(2, 5)).toBe(10);
  //   });
  //   test("2 * -5", () => {
  //     expect(multiply(2, -5)).toBe(-10);
  //   });
  //   test("-2 * 5", () => {
  //     expect(multiply(-2, 5)).toBe(-10);
  //   });
  //   test("-2 * -5", () => {
  //     expect(multiply(-2, -5)).toBe(10);
  //   });
  // });

  describe.only("division", () => {
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
      })
    });

    describe("negatives", () => {
      test("10 / -2", () => {
        expect(divide(10, -2)).toBe(-5);
      });
      test("-10 / 2", () => {
        expect(divide(-10, 2)).toBe(-5)
      });
    })
  });
});