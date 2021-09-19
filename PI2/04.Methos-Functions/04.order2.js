function calcPrice(drinkType, qty) {
	let drinks = ["water", "coffee", "coke", "snacks"];
	let prices = [1, 1.5, 1.4, 2];

  let index = drinks.indexOf(drinkType)
  return prices[index] * qty

}

function main(drink, quantity) {
	let output = calcPrice(drink, quantity);

	console.log(output.toFixed(2));
}
main("water", 5);
