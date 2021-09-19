function calcPrice(drinkType, qty) {
  switch (drinkType) {
    case 'water': return 1 * qty; 
    case 'coffee': return 1.5 * qty; 
    case 'coke': return 1.4 * qty; 
    case 'snacks': return 2 * qty; 
  }
}

function main(drink, quantity) {
  let output = calcPrice(drink, quantity)
  
  console.log(output.toFixed(2))
}
main('water',5)