class Rectangle {
  
  constructor(width, height, color) {
    this.width = width;
    this.color = color;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }
}