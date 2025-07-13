/*
Câu 9: Write a function "createUser" that takes a name and age,
and returns an object with those properties and a method "introduce" that logs:
"Hi, I'm [name] and I'm [age] years old.""
*/

function createUser(name, age) {
  const user = {
    name,
    age,
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };

  return user;
}

const user = createUser("nhtnhan", 22);
user.introduce();
