// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//explanation: The for...of loop is used to iterate over iterable objects like arrays, but 'author' is an object, not an array. To iterate over the properties of an object, we can use a for...in loop or Object.values() method.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
