function main(firstName, lastName, age) { 

  // 1. Create an object from function parameters
  let obj = { firstName, lastName, age }
 
  // Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));

  for (let [key, value] of Object.entries(obj)) { 
    console.log(`${key}: ${value}`)
  }
}

main("Peter", "Pan", "20");