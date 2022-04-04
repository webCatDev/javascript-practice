'use strict';

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// Challenge 1 solution
// function Car(make, speed){
//     this.make = make
//     this.speed = speed
//     this.accelerate = function(){
//         this.speed *= 1.1
//         console.log(this.speed)
//     }
//     this.brake = function(){
//         this.speed *= 0.95;
//         console.log(this.speed);
//     }
// }

// const BMW = new Car("BMW", 120)
// const Mercedes = new Car("Mercedes", 95)

// console.log(BMW.speed)
// BMW.brake()
// BMW.accelerate()

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    this.speedUS = speed / 1.6;
  }

  get speedUS() {
    return this._speedUS;
  }

  set speedUS(speed){
    this._speedUS = speed / 1.6;
    this.speed= speed
  }

  accelerate() {
    this.speed *= 1.1;
    console.log(this.speed);
  }

  brake() {
    this.speed *= 0.95;
    console.log(this.speed);
  }
}

const myCar = new Car("Ford", 100)

console.log(myCar.speed)
console.log(myCar.speedUS)
myCar.speedUS=500
console.log(myCar.speed)
console.log(myCar.speedUS)
