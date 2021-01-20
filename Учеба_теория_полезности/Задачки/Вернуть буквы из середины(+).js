function getMiddle(str) {
  if (!(str.length % 2)) {
    console.log("even");
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    console.log("odd");
    return str.slice(Math.floor(str.length / 2), Math.ceil(str.length / 2));
  }
}

console.log(getMiddle("odd")); // d
console.log(getMiddle("abcdfg")); // cd

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
