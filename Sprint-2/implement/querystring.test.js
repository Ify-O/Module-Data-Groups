// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

//OTHER CASES

// Given a simple key-value pair
test("parses normal key value pair", () => {
  expect(parseQueryString("a=1")).toEqual({
    a: "1",
  });
});

// Given multiple key-value pairs
test("parses multiple key value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({
    a: "1",
    b: "2",
  });
});

// Given empty string
test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Given key with empty value
test("handles key with empty value", () => {
  expect(parseQueryString("a=")).toEqual({
    a: "",
  });
});

// Given value contains special characters
test("handles encoded-like characters", () => {
  expect(parseQueryString("name=john+doe")).toEqual({
    name: "john+doe",
  });
});