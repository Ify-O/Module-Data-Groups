function findMax(array) {
  // filter only numbers and ignore others
  const numbers = array.filter((item) => typeof item === "number");

  // use the Math.max on filtered array
  return numbers.length ? Math.max(...numbers) : -Infinity;
}

module.exports = findMax;
