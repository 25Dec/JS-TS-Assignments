// Câu 2: Create a function "greet" that takes a name and a greeting (default is "Hello"). It should return a string lke: "Hello, Alice!"

function greet(name, greeting = "Hello") {
  return `${greeting} ${name}!`;
}

console.log(greet("Thien Nhan"));
