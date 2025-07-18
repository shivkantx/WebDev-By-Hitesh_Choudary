function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("Lemon Tea");
// console.log(lemonTea.describe());

function Animal(spacies) {
  this.spacies = spacies;
}

Animal.prototype.sound = function () {
  return `${this.spacies} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

let cat = new Animal("Cat");
// console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");
