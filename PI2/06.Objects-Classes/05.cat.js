// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input.
// It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided you must create a cat object.




class Cat { 
  constructor(name, age) { 
    this.name = name;
    this.age = age;
  }

  meow() { 
    console.log(`${this.name}, age ${this.age} says Meow`);   
  }
}

function main(catsArr) {
	// [                         [
	//  'Mellow 2',      =>        { name:'Mellow' , age: 2},
	//   'Tom 5'                   { name:'Tom , age: 5},
	// ]                          ]

  // Loop through each cat Information (string);


  let cats = []
  catsArr.forEach(catInfo => { 

    let [catName, catAge] = catInfo.split(' ');
    // Pushing cat object to cat arrays
    cats.push(new Cat(catName, catAge))

  })
  

  // Loop through cats array and execute the meow function for each cat object 
  cats.forEach(cat=> cat.meow())
}


main(["Mellow 2", "Tom 5"]);