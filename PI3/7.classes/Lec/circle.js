class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius*2
  }

  set diameter(d) {
    this.radius = d / 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius
  }

  set area(a) {
    this.radius = Math.sqrt(a / Math.PI);
  }
}



let c = new Circle(2);
console.log(c);
console.log(`Radius : ${c.radius}`)
console.log(`Diameter : ${c.diameter}`)
c.diameter = 10;
console.log(c)
console.log(`Area: ${c.area}`);
c.area = 25;
console.log(c.radius)
