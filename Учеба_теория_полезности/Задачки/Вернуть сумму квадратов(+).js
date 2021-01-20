function squareSum(numbers){
  console.log(numbers);
  const result = [];
  numbers.forEach((item) => {
    let num = item * item;
    result.push(num);
  });
  // console.log(result);
  return result.reduce(function(acc, cur){
    return acc + cur;
  },0)
}
squareSum([1,2]);

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}