// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// a) What is the current return value when invert is called with { a : 1 }
// a) { key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
// b) { key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2}
// c) { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs. It is needed in this program to iterate over the key-value pairs of the input object so that we can swap them and create the inverted object.

// e) Explain why the current return value is different from the target output.
// The current return value is different from the target output because in the current implementation, we are assigning the value to a property named "key" in the invertedObj, which means that every key in the input object will overwrite the same "key" property in the invertedObj. As a result, only the last key-value pair from the input object will be reflected in the output, leading to an incorrect inversion. The target output requires us to use the actual value as the key and the actual key as the value in the inverted object, which is not happening in the current implementation.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;  
