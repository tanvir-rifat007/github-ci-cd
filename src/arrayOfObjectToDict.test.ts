import { expect, it } from "vitest";

interface Person {
  id: string;
  name: string;
  age: number;
}

interface Dict {
  [key: string]: Pick<Person, "name" | "age">;
}

const persons: Person[] = [
  { id: "1", name: "Rifat", age: 23 },
  { id: "2", name: "Deserre", age: 32 },
];

const arrayOfObjectToDict = <
  T extends { id: string; name: string; age: number }
>(
  persons: T[]
): Dict => {
  let dict: Dict = {};

  persons.forEach((person) => {
    dict[person.id] = {
      name: person.name,
      age: person.age,
    };
  });

  return dict;
};

const res = arrayOfObjectToDict(persons);

console.log(res);

it("will create a person with a name", () => {
  expect(res["1"].name).toBe("Rifat");
  expect(res["1"].age).toBe(23);
});
