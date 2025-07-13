//Câu 5: Write a function "createCounter" that returned function is called, it should return an incremented count (starting from 1).

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
