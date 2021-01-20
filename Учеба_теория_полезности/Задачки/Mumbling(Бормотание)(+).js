function accum(s) {
  const str = s.toLowerCase().split("");
  const result = [];
  str.forEach((item, index, array) => {
    result.push(item.toUpperCase() + array[index].repeat(index));
  });
  return result.join("-");
}

accum("ZpglnRxqenU"); // Z-Pp-Ggg-....

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
