function main(arr) {

  let count = 0;

  for (let row = 0; row < arr.length -1 ; row++) {
    // check if the row has a neighbor array 
    // if (arr[row + 1]) {
      for (let col = 0; col < arr[row].length; col++) {
  
        if (arr[row][col] === arr[row + 1][col]) {
          count++;
        }
      }
    }

  // }
  console.log(count)
}


main([
	["test", "yes", "yo", "ho"],
	["well", "done", "yo", "6"],
	["not", "done", "yet", "5"],
]);