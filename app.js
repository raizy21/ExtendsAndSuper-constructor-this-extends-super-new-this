class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

const monty = new Cat("monty", 9);
console.log(monty.eat());
console.log(monty.meow());

const wyatt = new Dog("Wyatt", 13);
console.log(wyatt.eat());
console.log(wyatt.bark());
