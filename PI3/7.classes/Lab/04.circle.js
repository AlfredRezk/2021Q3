class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get area() {
		return Math.PI * this.radius ** 2;
  }
  
	get diameter() {
		return this.radius * 2;
	}

	set diameter(d) {
		this.radius = d / 2;
	}
}