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
