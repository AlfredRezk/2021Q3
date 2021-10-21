function main(inputArr) {

  // let obj={
  //    product:[{town: 'Name of town', price":'1000'}, {town:price}]
  //    product:[{town:price}, {town:price}]
  // }
  
  let outputObj = {}

  inputArr.forEach(townInfo => {
    let [town, product, price] = townInfo.split(' | ');

    if (!outputObj.hasOwnProperty(product)) {
      outputObj[product] = [];
    }

    let obj = {}
    obj.town = town;
    obj.price = price;
    outputObj[product].push(obj)
  })

// sort the towns array
  let productsArray = Object.keys(outputObj);
  productsArray.forEach(product => {
    outputObj[product].sort((a,b)=> Number(a.price)- Number(b.price))
  })
  
  // printing
  productsArray.forEach(product => {
    console.log(`${product} -> ${outputObj[product][0].price} (${outputObj[product][0].town})`);
  })
}

main([
	"Sample Town | Sample Product | 1000",
	"Sample Town | Orange | 2",
	"Sample Town | Peach | 1",
	"Sydney | Orange | 3",
	"Sydney | Peach | 2",
	"New York | Sample Product | 1000.1",
	"New York | Burger | 10",
]);