function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
