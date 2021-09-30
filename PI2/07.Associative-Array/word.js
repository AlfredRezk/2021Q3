function main(arr) { 

  // Create empty Map
  let map = new Map();

  // unique words array 
  let uniqueArr = [...new Set(arr)];

  for (let word of uniqueArr) { 
    let found = arr.filter(el => el === word)
    map.set(word, found.length)
  }
  
  // Convert Map to an array 
  let mapArr = Array.from(map);

  mapArr.sort((a,b)=> b[1]-a[1])

  mapArr.forEach(([word, occr])=> console.log(`${word} -> ${occr} times`))

}

main([
	"Here",
	"is",
	"the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"sentence",
	"And",
	"finally",
	"the",
	"third",
	"sentence",
]);