function findMax(array) {
  const numbers = array.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  return numbers.length ? Math.max(...numbers) : -Infinity;
}

module.exports = findMax;
