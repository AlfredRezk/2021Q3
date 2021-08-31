/* 1. Building
Write a function to print a table, representing a building:
● Odd floors hold apartments (type A), e.g. A10, A11, A12, …
● Even floors hold offices (type O), e.g. O20, O21, O22, …
● The last floor holds large apartments (type L), e.g. L60, L61, L62
● Identifiers consist of: {type}{floor}{number}, e.g. L65, A12,O24
Input
● the count of floors and the count of estates per floor
*/

function main(floors, estates) {
  // Loop for the floors 
  for (let f = floors; f >= 1; f--) {
		let result = "";
		// Loop for the estates
    for (let e = 0; e < estates; e++) {
      
      if (e!=0) {
        result+=" "
      }
      // Check for the type office, or apt or Last 
      if (f % 2 == 0 && f !== floors) {
        result += `O${f}${e}`
      } else if (f === floors) {
        result += `L${f}${e}`
      } else {
        result += `A${f}${e}`;
      }
    }

		console.log(result);
	}
}


main(5,3)