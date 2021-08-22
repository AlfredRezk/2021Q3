// Ascending   num1<num2<num3   (1,2,3)
// Descending  num1>num2>num3  (3,2,1)
// Not sorted    (1,3,2)

function main(n1, n2, n3) {
  
  // Ascending
  if (n1 < n2 && n2 < n3) {
		console.log("Ascending");
		// Descending
	} else if (n1 > n2 && n2 > n3) {
    console.log('Descending');
  } else {
		// Not sorted
		console.log("Not sorted");
	}

}