// Câu 4: Write a function "applyOperation" that takes two numbers and a function as parameters, and returns the result of applying the function to the two numbers.

function applyOperation(a, b, operation) {
  return operation(a, b);
}

console.log(applyOperation(3, 4, (x, y) => x * y));
