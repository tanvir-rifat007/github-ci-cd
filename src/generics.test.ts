import { expect, it } from "vitest";

function arrayOfStringOrNumber<T>(...args: T[]): T[] {
  let res: T[] = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      res.push(arg.toUpperCase() as unknown as T);
    }

    if (typeof arg === "number") {
      res.push(arg as unknown as T);
    }
  });

  return res;
}

const res = arrayOfStringOrNumber("Tanvir Rifat", "Deserre");
it("UpperCase", () => {
  expect(res[1]).toBe("DESERRE");
});
