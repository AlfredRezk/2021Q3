class Point {
  
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y
  }

  set x(newX) {
    this.#x = newX;
  }

  set y(newY) {
    this.#y = newY;
  }
}


const p1 = new Point(2, 3)
p1.x = 12
p1.y = 10;
 console.log(p1.x, p1.y)