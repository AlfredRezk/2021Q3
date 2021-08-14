// Write a USD to EUR converting function, which:
//     • Receives a number: the dollars to be converted
//     • Converts dollars to euro (the rate of dollars to euro is 0.88 )
//     • Prints the converted value in euro

function main(dollars) {
  let euros = (dollars * 0.88);
  let output = euros+ ' EUR';
  // let output = `${euros} EUR`;
  console.log(output);
}

main(17);   //17*0.88
main(87);   //87*0.88
main(42)   //42*0.88