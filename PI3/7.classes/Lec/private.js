// class Circle {
  
//   #pi = 3.14;
  

//   circleArea(r) {
//     return this.#pi*r*r
//   }

//   circlePram(r) {
//     return 2*this.#pi*2
//   }
// }



class Person {

  #first
  constructor(first, last) {
    this.#first = first;
    this.last = last 
  }

  get first() {
    return this.#first
  }

  set first(name) {
    if (typeof (name) === 'string') {
    this.#first = name;
      
    }
  }

}

const p1 = new Person('Mike', 'Smith')
p1.first = 15663;
console.log(p1.first);
console.log(p1.last);

// const c1 = new Circle();
// console.log(c1.circleArea(4))

