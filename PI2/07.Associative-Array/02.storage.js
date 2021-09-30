function main(arr) { 

  // Create an Empty Map
  let map = new Map();

  // Iterate through the input array to store key/value in Map
  for (let data of arr) { 
    // let [product, qty] = data.split(' ')
    let product = data.split(' ')[0];
    let qty = Number(data.split(' ')[1])

    //  if the map doesn't has the product - add it to the Map
    if (!map.has(product)) {
      map.set(product, qty)
    } else { 
      // if the Map already has the product
      // get the old qty,
      let oldQty = map.get(product)
      // add the input qty to the old qty
      let newQty = oldQty + qty
      // update the product qty
      map.set(product, newQty)
    }
  }

  // To print the Map formatted with key -> value

  map.forEach((value, key)=> console.log(`${key} -> ${value}`))
// for (let [product, quantity] of map) {
// 	console.log(`${product} -> ${quantity}`);
// }


}

main(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);