// Câu 6: Write a recursive function "factorial(n)" that returns the factorial of n.
// ex: factorial (5) -> 120

function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
