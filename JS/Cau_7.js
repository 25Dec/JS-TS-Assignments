// Câu 7: Write a function "sumAll" that takes any number of arguments and returns their sum.

function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sumAll(100, 200, 300));
