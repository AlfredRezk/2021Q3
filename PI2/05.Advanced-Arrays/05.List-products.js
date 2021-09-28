function main(products) {
	// sort the products array asc ordered by name
	products.sort((a, b) => a.localeCompare(b));

	// Print a numbered array of all the products ordered by name.
  products.forEach(
    (product, i) =>
      console.log(`${i + 1}.${product}`))
}

main(["Potatoes", "tomatoes", "Onions", "Apples"]);