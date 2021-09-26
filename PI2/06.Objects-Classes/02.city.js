function main(name, area, population, country, postCode) { 

  // 1. Create the city object 
  let city = { name, area, population, country, postCode }
  
  // 2. loop through the object and print the key -> value

  let entries = Object.entries(city)   // [ ['name', 'Atlanta'], ['area', 343] , ['population', 416474], ['country', 'USA], .]

  entries.forEach(([key, value]) => console.log(`${key} -> ${value}`))
}

main("Atlanta", "343", "416474", "USA", "404");