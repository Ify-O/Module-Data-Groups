const createLookup = require("./lookup.js");

/*
Create a lookup object of key value pairs from an array of code pairs
*/

// Acceptance Criteria:

// Given
// - An array of arrays representing country code and currency code pairs
//   e.g. [['US', 'USD'], ['CA', 'CAD']]

// When
// - createLookup function is called with the country-currency array as an argument

// Then
// - It should return an object where:
// - The keys are the country codes
// - The values are the corresponding currency codes
test("creates a country currency code lookup for multiple codes", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];

  expect(createLookup(input)).toEqual({
    US: "USD",
    CA: "CAD",
  });
});

// Given
// - An array of arrays representing country code and currency code pairs

// When
// - createLookup is called with an empty array

// Then
// - It should return an empty object
test("returns empty object when input is empty", () => {
  expect(createLookup([])).toEqual({});
});

// Given
// - A single country-currency pair

// When
// - createLookup is called with one pair

// Then
// - It should return an object with one key-value pair
test("handles single pair correctly", () => {
  expect(createLookup([["NG", "NGN"]])).toEqual({
    NG: "NGN",
  });
});
