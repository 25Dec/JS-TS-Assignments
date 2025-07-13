/*
Create a function "isEligible" that takes two parameters:

- age: number
- status: 'student' | 'professional' (as a string literal type)

The function should return a string:

- "Eligible for discount" if age is under 26 or status is "student"
- "Not eligible" otherwise
*/

const isEligible = (age: number, status: "student" | "professional"): string =>
  age <= 26 || status === "student" ? "Eligible for discount" : "Not eligible";

console.log(isEligible(25, "student"));
console.log(isEligible(30, "professional"));
console.log(isEligible(22, "professional"));
console.log(isEligible(35, "student"));
