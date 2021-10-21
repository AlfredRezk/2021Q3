// towns ={
//    Sydney: [{'Laptop': income}, {Rasberry: income}],
//    Montana: [{'Laptop': income}, {Rasberry: income}],
// }

function main(inputArr) {

  let towns = {}

  inputArr.forEach(townInfo => {

    let [name, product, quantityPrice] = townInfo.split(' -> ');
    let [quantity, price] = quantityPrice.split(' : ');
    // Calculate the income
    let income = Number(quantity) * Number(price);

    // if the town is not exist in my object add it 
    if (!towns.hasOwnProperty(name)) {
      towns[name] = [];
    }

    let obj = {};
    obj[product] = income;
    towns[name].push(obj);
    
  })

  for (let town in towns) {
    console.log(`Town - ${town}`);
    towns[town].forEach(product => {
      let key = Object.keys(product).join('')
      console.log(`$$$${key} : ${product[key]}`)
    })
  }
}

main(['Sydney -> Laptops HP -> 200 : 2000',
'Sydney -> Raspberry -> 200000 : 1500',
'Sydney -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])