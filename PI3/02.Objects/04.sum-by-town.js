function main(arr) {
  
  // Town object 
  let towns = {}

  // // Loop through the input array 
  // for (let i = 0; i < arr.length; i += 2) {
    
  //   // check if it is a new town or it is already exist in the object
  //   if (!towns.hasOwnProperty(arr[i])) {
  //     towns[arr[i]] = Number(arr[i + 1]);
  //   } else {
  //     // town is already exist 
  //     towns[arr[i]] += Number(arr[i + 1]);
  //   }
  // }

  arr.forEach((town, i) => {
    if (i % 2 == 0) {
			  if (!towns.hasOwnProperty(town)) {
			    towns[town] = Number(arr[i + 1]);
			  } else {
			    // town is already exist
			    towns[town] += Number(arr[i + 1]);
			  }
		}
  })

  console.log(JSON.stringify(towns))
}

main(["Sydney", "20", "Melbourne", "3", "Sydney", "5", "Melbourne", "4"]);