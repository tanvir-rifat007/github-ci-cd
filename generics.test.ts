import { expect, it } from "vitest";

function arrayOfStringOrNumber<T>(...args: T[]): T[] {
  let res;

  if (typeof args[1] === "string") {
    res = args[1].toUpperCase();
  } else if (typeof args[0] === "number") {
    res = args[0].toFixed(2);
  }

  return res;
}

const res = arrayOfStringOrNumber("Tanvir Rifat", "Deserre");

it("UpperCase", () => {
  expect(res).toBe("DESERRE");
});
