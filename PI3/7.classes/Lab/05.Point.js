class Point {
  
  constructor(x, y) {
    this.x = x;
    this.y = y
  }

  // a = {x:3, y:4}
 static distance(a,b) {
    const xdif = a.x - b.x;
    const ydif = a.y - b.y;
    return Math.sqrt(xdif**2 + ydif**2)
  }
}

