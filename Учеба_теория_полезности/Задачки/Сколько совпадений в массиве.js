function count([...string]) {
  let result = {};
  string.forEach((element) => {
    result[element] = (result[element] || 0) + 1;
  });
  return result;
}

count("abacdddcafgh");
