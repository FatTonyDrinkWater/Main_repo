function isIsogram(str) {
  let a = str.split(" ");
  let b = a.filter((item, pos, arr) => {
    arr.indexOf(item) == pos;
  });
  let c = b.length == str.length;
  return c;
  return (
    str.split("").filter((item, pos, arr) => arr.indexOf(item) == pos).length ==
    str.length
  );
}
console.log(isIsogram("thomas"));
console.log(isIsogram("moses"));
