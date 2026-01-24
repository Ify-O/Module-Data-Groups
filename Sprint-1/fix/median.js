// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(lists) {
  if (!Array.isArray(lists)) return null;
  let newList = [];

  for (let i = 0; i < lists.length; i++) {
    if (typeof lists[i] === "number") {
      newList.push(lists[i]);
    }
  }
  if (newList.length === 0) return null;
  newList.sort((a, b) => a - b);
  const middleIndex = Math.floor(newList.length / 2);
  if (newList.length % 2 === 0) {
    return (newList[middleIndex - 1] + newList[middleIndex]) / 2;
  } else {
    return newList[middleIndex];
  }
}

module.exports = calculateMedian;
