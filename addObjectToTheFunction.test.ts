import { expect, it } from "vitest";

type LocationType = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  location: Record<"present" | "permanent", LocationType>;
};

const createPerson = (
  name: string,
  age: number,
  location: Record<string, LocationType>
) => {
  let people: Person[] = [];

  people.push({
    name,
    age,
    location,
  });

  return people;
};

let persons = createPerson("Rifat", 23, {
  present: { city: "Dhaka", country: "Bangladesh" },
  permanent: { city: "Dhaka", country: "Bangladesh" },
});

it("will create a person with a name", () => {
  expect.hasAssertions();
  // Verify that person.name is correct.

  persons.forEach((person) => {
    expect(person.name).toBe("Rifat");
    expect(person.age).toBe(23);
    expect(person.location.present.city).toBe("Dhaka");
  });
});
