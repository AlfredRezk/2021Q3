function main([nhNames, ...data]) { 

  let map = new Map();

  let nhList = nhNames.split(', ');

  for (let nh of nhList) {
    map.set(nh, [])
  }

  for (let item of data) {
    let [neighborhood, person] = item.split(' - ');
    
    // Check if the neighborhood is in the list 
    if (nhList.includes(neighborhood)) { 
      //  Add the person to the map
      map.get(neighborhood).push(person)
    }
  }

// sorting 
  let mapArr = Array.from(map);
 
  mapArr.sort((a, b) => b[1].length - a[1].length)

  // Printing 
  for (let [nh, people] of mapArr) {
    console.log(`${nh} : ${people.length}`)
    people.forEach(person=> console.log(`--${person}`))
  }


}
main([
	"Abbey Street, Herald Street, Bright Mews",
	"Bright Mews - Garry",
	"Bright Mews - Andrea",
	"Invalid Street - Tommy",
	"Abbey Street - Billy",
]);