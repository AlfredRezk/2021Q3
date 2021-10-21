function main(arr) {

  // create an empty array 
  let output = [];

  // get the title and parse it 
  let [nameKey, latKey, longKey] = arr.shift().replace(/[|]\s?/g, '').trim().split(' ');

  // Iterate through every row (array element)
  // Parse the data - values 
  // create an object 
  // push the object to the output array 
  arr.forEach((townData) => {
    // Parse the data to get the object values 
    let [name, lat, long] = townData.replace(/[|]\s?/g, '').trim().split(' ');
    // Create the object 
    let obj = {}
    obj[nameKey] = name;
    obj[latKey]= Number(Number(lat).toFixed(2))
    obj[longKey]= Number(Number(long).toFixed(2))
  
    // add the object to the output array
    output.push(obj)
  })
  

  // Print the array as JSON
  console.log(JSON.stringify(output))
}

main([
	"| Town | Latitude | Longitude |",
	"| Melbourne |-37.840935 | 144.946457|",
	"| Beijing | 39.913818 | 116.363625 |",
]);