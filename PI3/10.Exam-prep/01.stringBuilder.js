class StringBuilder {
	constructor(string = "") {
		if (typeof string === "string") {
			this.stringArr = string.split("");
		} else {
			throw "TypeError:'Argument must be string'";
		}
	}

	// Append Method
	append(string) {
		if (typeof string === "string") {
			// convert the string to an array of characters
			let tempArr = string.split("");
			// Update my storage stringArr
      // this.stringArr = this.stringArr.concat(tempArr);
      this.stringArr = [...this.stringArr, ...tempArr]
		} else {
			throw("TypeError:'Argument must be string'");
		}
  }
  
  // Prepend Method 
  prepend(string) {
    if (typeof (string) === 'string') {
			// convert the string to an array of characters
			let tempArr = string.split("");
			// Update my storage stringArr
      this.stringArr = [...tempArr, ...this.stringArr]
		} else {
      	throw("TypeError:'Argument must be string'");
    }
  }

  // insertAt 
  insertAt(string, index) {
    if (typeof (string) === 'string') {
			// convert the string to an array of characters
      let tempArr = string.split("");
      this.stringArr.splice(index, 0, ...tempArr);
		} else {
      throw "TypeError:'Argument must be string'";
    }
  }

  // Remove
  remove(startIndex, length) {
    this.stringArr.splice(startIndex,length)
  }

  // To upper case
  allToUpper() {
    // this.stringArr= this.stringArr.join("").toUpperCase().split("")
    // second Method
    this.stringArr = this.stringArr.map(ch=> ch.toUpperCase())
  }

  allToLower() {
		// this.stringArr= this.stringArr.join("").toLowerCase().split("")
		// second Method
		this.stringArr = this.stringArr.map((ch) => ch.toLowerCase());
  }
  
  toUpper(index) {
    this.stringArr[index] = this.stringArr[index].toUpperCase()
  }

  toLower(index) {
    this.stringArr[index] = this.stringArr[index].toLowerCase();
  }

  toString() {
    return this.stringArr.join("")
  }


}



let str = new StringBuilder("hello");
str.append(", there");
str.prepend("User, ");
str.insertAt("woop", 5);
console.log(str.toString());
str.remove(6, 3);
str.allToUpper();
console.log(str.toString());