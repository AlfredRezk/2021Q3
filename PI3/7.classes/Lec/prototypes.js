// Class (ES6) 2015

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   fullName() {
//       return `${this.firstName} ${this.lastName}`
//   }
// }


// Before 2015 constructing function 
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.fullName = function () {
//       return `${this.firstName} ${this.lastName}`;
// }

// let p1 = new Person('Mike', 'Smith');
// let p2 = new Person('Mike', 'Smith');
// let p3 = new Person('Mike', 'Smith');
// console.log(p1.sayHi());


function Person(first, last, age) {
this.firstName = first;
this.lastName = last;
this.age = age;
}

Person.prototype.nationality = "American";


const p1 = new Person('John', 'Doe', '24');
const p2 = new Person('Mike', 'Doe', '26');
console.log(p2)

