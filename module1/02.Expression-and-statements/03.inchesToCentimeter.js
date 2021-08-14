// • Write a function to convert inches to centimeters , which:
// • Receives a number: the inches to be converted
// • Calculates them to centimeters
// • 1 inch = 2.54 centimeters
// • Prints the result, formatted with 2 digits after the decimal point

function main(inches) {
  let centi = inches * 2.54;
  console.log(centi.toFixed(2))
}

main(21) //53.34
main(71) //180.34
main(87) //220.98
main(4)  //10.16