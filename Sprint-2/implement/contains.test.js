const contains = require("./contains.js");

/*
Acceptance criteria:
*/

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test("returns true if object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false if object does not contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false for empty object", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for invalid input like array", () => {
  expect(contains(["a", "b"], "a")).toBe(false);
});
