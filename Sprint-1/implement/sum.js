//the goal is to filter out the non numbers and the sum the filtered numbers
function sum(elements) {
  const numbers = elements.filter((item) => typeof item === "number");
  return numbers.reduce((sum, current) => sum + current, 0);
}

module.exports = sum;
