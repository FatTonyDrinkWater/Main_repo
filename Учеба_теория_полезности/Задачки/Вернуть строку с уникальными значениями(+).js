function longest(s1, s2) {
  let [...strArr1] = s1;
  let [...strArr2] = s2;
  let result = [];
  // Есть два массива
  let newString = strArr1.concat(strArr2);
  // Теперь 1 массив со всеми значениями
  newString.forEach(function (item) {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  // Сортируем массив по порядку и переводим его в строку для инпута

  return result.sort().join(""); // sorted Str
}

const str1 = "dfkdbc";
const str2 = "ypuk";
longest(str1, str2);

// Второе решение ----------------------------------------------------------
function longest(s1, s2) {
  let newSortedArr = [];
  let string = s1 + s2;
  let [...arrStr] = string;
  console.log(arrStr);
  // Теперь 1 массив со всеми значениями
  arrStr.forEach(function (item) {
    if (!newSortedArr.includes(item)) {
      newSortedArr.push(item);
    }
  });

  return newSortedArr.sort().join(""); // sorted Str
}

const str1 = "dfkdbc";
const str2 = "ypuk";
longest(str1, str2);
// Идеальное решение -------------------------------------------------
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

function findShort(s) {
  const arr = s.split(" ");
  let smallest = 1000;
  console.log(arr);
  arr.forEach(function (item) {
    if (item < smallest) {
      smallest.push(item);
    }
  });
  return s.lenght;
}

findShort("Somebody once told me the world is gonna roll me ");
