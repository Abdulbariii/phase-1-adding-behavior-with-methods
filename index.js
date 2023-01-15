// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return this.name + " says meow!";
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return this.name + " says woof!";
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function () {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    };
  }
}

let Buzz = new Cat("Buzz", "male");
let Twitter = new Bird("Twitter", "male");

console.log(Buzz.speak());
console.log(Twitter.speak());
