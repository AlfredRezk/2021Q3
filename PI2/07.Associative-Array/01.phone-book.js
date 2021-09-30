function main(inputArr){

// Create an empty Object (Associative Array)
  let phoneBook = {};

  // 1. Fill/create the associative array 
  // Iterate through the inputs to store the data in Associative array 
  for (let el of inputArr) {
		//Get the name and number from the string
		// By converting the string to an array using split() on space

		// let [name, number] = el.split(' ')
		let name = el.split(" ")[0];
		let number = el.split(" ")[1];

		// Store key/Value in associative Arr.
    phoneBook[name] = number
  }
  
  // Loop with .forEach
  // inputArr.forEach(el => { 
  //   		let name = el.split(" ")[0];
	// 			let number = el.split(" ")[1];

	// 			// Store key/Value in associative Arr.
	// 			phoneBook[name] = number;
  // })


  // 2. Iterate to print the associative array 
  for (let key in phoneBook) { 
    console.log(`${key} -> ${phoneBook[key]}`)
  }

}


main([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);