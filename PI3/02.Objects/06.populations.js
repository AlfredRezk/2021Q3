function main(arr) {
  
  let towns = {}

  arr.forEach(townStr => {
    
    // Parse each town string 
    let [townName, townPop] = townStr.split(' <-> ')

    // check if it is in the towns object or not 
    if (towns.hasOwnProperty(townName)) {
      // Add pop (existing pop)
      towns[townName] += Number(townPop)
    } else {
      towns[townName] = Number(townPop);
    }

  });
  // Loop to format the output
  for (let [key, value] of Object.entries(towns)) {
    console.log(`${key}: ${value}`)
  }

}

main(['Sydney <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])