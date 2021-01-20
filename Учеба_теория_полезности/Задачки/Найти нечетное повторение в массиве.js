function findOdd(A) {
  let obj = {};
  A.forEach((el, i) => {
    obj[el] = (obj[el] || 0) + 1;
  });
  let res;
  for (let key in obj) {
    if (obj[key] % 2) {
      res = key;
    }
  }
  console.log(obj);
  return +res;
}

let a = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
findOdd(a);

//Какая-то ультраматематическая шняга
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item) => arr.filter((el) => el == item).length % 2);
}


// function findOdd(arr) {
//   return arr.find((item) => arr.filter((el) => el == item).length % 2);
// }

function findOdd(arr) {
    return arr.find(function(item) {
      console.log(`Item is ${item}`)
     return arr.filter(function(el) {
        console.log(`Element is ${el}`)
        return el == item
      }).length % 2
    })
  }
  
  
  let a = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
  findOdd(a);
  
  console.log(a.length)