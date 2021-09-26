// Write a Function That Receives Name, LastName, HairColor and Sets Them to an Object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.
function main(firstName, lastName, hairColor) {

  // create an object 
  let person = { firstName, lastName, hairColor }
  
  // convert the object to json 
  let personJson = JSON.stringify(person);

  // print the json data 
  console.log(personJson);

  // Alternative sol
  // console.log(JSON.stringify({firstName, lastName, hairColor}))

}

main("George", "Jones", "Brown");