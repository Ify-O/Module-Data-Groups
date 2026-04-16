function parseQueryString(query) {
  const result = {};

  if (!query) return result;

  const pairs = query.split("&");

  for (let i = 0; i < pairs.length; i++) {
    const [key, ...rest] = pairs[i].split("=");
    const value = rest.join("="); 

    result[key] = value;
  }

  return result;
}

module.exports = parseQueryString;
